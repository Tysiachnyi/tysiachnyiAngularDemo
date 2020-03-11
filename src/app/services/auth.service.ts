import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class AuthService {
    private ACCESS_KEY = '3f981ca1095b39ab41f76c5c6d7a4374';
    data;
    ip: string | any;
    country: string | any;
    countryFlag: any;
    loggedDate: any;
    isAuth = false;
    ipApi = 'https://api.ipify.org?format=json';
    showModal: boolean;

    constructor(private router: Router,
                private http: HttpClient) {}

    login() {
        this.showModal = true;
        setTimeout(() => {
            this.loggedDate = new Date();
            this.http.get(this.ipApi).subscribe((response: any) => {
                this.ip = response.ip;
                console.log(`http://api.ipstack.com/${this.ip}?access_key=${this.ACCESS_KEY}&format=1`);
                this.http.get(
                    `http://api.ipstack.com/${this.ip}?access_key=${this.ACCESS_KEY}&format=1`)
                    // tslint:disable-next-line:no-shadowed-variable
                    .subscribe((response: any) => {
                        console.log(response);
                        this.country = response.country_name;
                        this.countryFlag = response.location.country_flag_emoji;
                    });
            });
            this.isAuth = true;
            this.showModal = false;
        }, 1000);
    }

    logout() {
        if (this.router.url === '/user') {
            this.router.navigateByUrl('/');
        }
        this.isAuth = false;
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
                resolve(this.isAuth);
        });
    }
}
