import { describe, it, expect, beforeEach } from 'vitest';
import { Account, Entry, CategoryEnum } from '../src/Account.js';

let account: Account;

beforeEach(() => {
  account = new Account({ name: 'Cuenta de prueba' }); // ✅ Ahora funciona
});

describe('Account', () => {
  it('debe agregar una entrada', () => {
    const entry = new Entry('Ingreso prueba', 100, CategoryEnum.income);
    const added = account.addEntry(entry);
    expect(added).toBe(true);
    expect(account.getEntries().length).toBe(1);
  });

  it('getBalance() debe sumar ingresos y restar gastos correctamente', () => {
    const income = new Entry('Ingreso', 200, CategoryEnum.income);
    const expense = new Entry('Gasto', 50, CategoryEnum.expense);
    account.addEntry(income);
    account.addEntry(expense);
    expect(account.getBalance()).toBe(150);
  });

  it('deleteEntryById() debe eliminar la entrada correcta', () => {
    const entry1 = new Entry('Ingreso 1', 100, CategoryEnum.income);
    const entry2 = new Entry('Gasto 1', 50, CategoryEnum.expense);
    account.addEntry(entry1);
    account.addEntry(entry2);

    account.deleteEntryById(entry1.id);

    const entries = account.getEntries();
    expect(entries.length).toBe(1);
    expect(entries[0].id).toBe(entry2.id);
    expect(account.getBalance()).toBe(-50);
  });
});
