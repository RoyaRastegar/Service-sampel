import { IAccount } from "./account";

export class AccountService {
    account: IAccount[] = [
        { name: 'Roya', password: '5419' },
        { name: 'saber', password: '2728' }
    ]
    addAccount(a: IAccount) {
        this.account.push(a);
    }
}