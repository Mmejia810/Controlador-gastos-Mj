import { getRandomId } from './utils.js';

export interface EntryData {
  id: number;
  concept: string;
  amount: number;
  category: CategoryEnum;
}

export enum CategoryEnum {
  expense = 'Expense',
  income = 'Income',
}

export interface AccountData {
  id: number;
  name: string;
   entries: Entry[];
  balance: number;

  addEntry(entry: Entry): boolean;
  deleteEntryById(id: number): boolean;
  getBalance(): number;
  getEntries(): Entry[];
}

export class Account implements AccountData {
  public entries: Entry[];
  public balance: number;

  constructor(account: Partial<Account> = {}) {
    this.id = account.id || getRandomId();
    this.name = account.name || 'Nueva Cuenta';
    this.entries = account.entries || [];
    this.balance = account.balance || 0;
  }
  id: number;
  name: string;

  addEntry(entry: Entry): boolean {
    this.entries.push(entry);
    this.updateBalance();
    return true;
  }
  deleteEntryById(id: number): boolean {
    const entriesFiltered = this.entries.filter((entry) => entry.id !== id);
    this.entries = entriesFiltered;
    this.updateBalance();
    return true;
  }
  getBalance(): number {
    return this.balance;
  }
  getEntries(): Entry[] {
    return this.entries;
  }

private updateBalance(): void {
    // Arrow function evita _this = this
    this.balance = this.entries.reduce(
      (previousValue, currentEntry) => previousValue + this.convertAmountByCategory(currentEntry),
      0
    );
  }

  private convertAmountByCategory(entry: Entry): number {
    const { category, amount } = entry;
    if (category === CategoryEnum.expense) {
      return -amount;
    }
    return amount;
  }
}

export class Entry implements EntryData {
  public id: number;
  constructor(
    public concept: string,
    public amount: number,
    public category: CategoryEnum
  ) {
    this.id = getRandomId();
  }
}
