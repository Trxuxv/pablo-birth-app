import { Router } from '@angular/router';
import { AppBreadcrumbService } from './../../../app.breadcrumb.service';
import { AppMainComponent } from 'src/app/app.main.component';
import { ProductService } from '../../service/productservice';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['../tabledemo.scss']
})
export class HomeComponent implements OnInit {

    ordersChart: any;

    ordersOptions: any;

    activeOrders = 0;

    trafficChart: any;

    trafficOptions: any;

    activeTraffic = 0;

    goalChart: any;

    goalOptions: any;

    items: MenuItem[];

    val1 = 1;

    selectedItem: number;

    val2 = 2;

    orderWeek: any;

    selectedOrderWeek: any;

    products: Product[];

    productsThisWeek: Product[];

    productsLastWeek: Product[];

    constructor(private productService: ProductService, public router: Router,
        private breadcrumbService: AppBreadcrumbService, private appMain: AppMainComponent) {
        this.breadcrumbService.setItems([
            { label: 'Main' },
            { label: 'Home', routerLink: ['/home'] }
        ]);
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
        this.productService.getProducts().then(data => this.productsThisWeek = data);
        this.productService.getProductsMixed().then(data => this.productsLastWeek = data);

        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
            datasets: [{
                label: 'Revenue',
                data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
                borderColor: [
                    '#00acac',
                ],
                borderWidth: 2,
                fill: false,
                borderDash: [3, 6],
            }, {
                label: 'Cost',
                data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
                borderColor: [
                    '#f1b263',
                ],
                backgroundColor: [
                    'rgba(241, 178, 99, .07)',
                ],
                borderWidth: 2,
                fill: true,
                pointRadius: 3,
            }]
        };

        this.ordersOptions = {
            legend: {
                display: true,
                labels: {
                    fontColor: '#A0A7B5'
                }
            },
            responsive: true,
            hover: {
                mode: 'index'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#A0A7B5'
                    },
                    gridLines: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#A0A7B5'
                    },
                    gridLines: {
                        color: 'rgba(160, 167, 181, .3)',
                    }
                }],
            }
        };

        this.trafficChart = this.getTrafficChartData();

        this.trafficOptions = {
            legend: {
                display: false,
            },
            responsive: true,
            cutoutPercentage: 75
        };

        this.appMain['refreshTrafficChart'] = () => {
            this.trafficChart = this.getTrafficChartData();
        };

        this.goalOptions = {
            legend: {
                display: false,
            },
            responsive: true,
        };

        this.items = [
            { label: 'See Options', icon: 'pi pi-comment', command: () => this.OnPeopleHate(this.selectedItem) },
            { label: 'Profile', icon: 'pi pi-user', command: () => this.OnPeopleProfile(this.selectedItem) },
        ];

        this.orderWeek = [
            { name: 'This Week', code: '0' },
            { name: 'Last Week', code: '1' }
        ];
    }

    getTrafficChartData() {
        return {
            labels: [
                'Add View',
                'Total View',
            ],
            datasets: [{
                data: [98, 100],
                backgroundColor: [
                    getComputedStyle(document.body).getPropertyValue('--primary-dark-color') || '#2c84d8',
                    getComputedStyle(document.body).getPropertyValue('--content-alt-bg-color') || '#B1B9C9',
                ],
                borderWidth: 0,
            }]
        };
    }

    changeDataset(event) {
        const dataSet = [
            [31, 83, 69, 29, 62, 25, 59, 26, 46],
            [40, 29, 7, 73, 81, 69, 46, 21, 96],
        ];
        const dataSet2 = [
            [67, 98, 27, 88, 38, 3, 22, 60, 56],
            [74, 67, 11, 36, 100, 49, 34, 56, 45],
        ];

        this.activeOrders = parseInt(event.currentTarget.getAttribute('data-index'));

        this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[1].data = dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
        this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
    }

    changeTrafficset(event) {
        const traffidDataSet = [
            [30800, 100],
            [900, 100],
            [700, 100],
            [90, 100],
            [500, 100],
        ];
        this.activeTraffic = parseInt(event.currentTarget.getAttribute('data-index'));

        this.trafficChart.datasets[0].data = traffidDataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
    }

    OnPeopleHate(id: number) {
        this.router.navigate(['/pabloByPeople/' + id]);
    }

    OnPeopleProfile(id: number) {
        this.router.navigate(['/profile/' + id]);
    }
}
