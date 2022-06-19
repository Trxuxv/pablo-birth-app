(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "++GG":
    /*!*********************************************!*\
      !*** ./src/app/demo/view/overlaysdemo.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function GG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".product-image {\n  width: 50px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n\n:host ::ng-deep button {\n  margin-right: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvdmVybGF5c2RlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQUE7RUFDQSx3RUFBQTtBQUNEOztBQUVBO0VBQ0Msb0JBQUE7QUFDRCIsImZpbGUiOiJvdmVybGF5c2RlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltYWdlIHtcclxuXHR3aWR0aDogNTBweDtcclxuXHRib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMylcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbiB7XHJcblx0bWFyZ2luLXJpZ2h0OiAuMjVlbTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "+BCQ":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/treedemo.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function BCQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Horizontal Tree</h5>\r\n\t\t\t<p-tree [value]=\"files3\" layout=\"horizontal\" selectionMode=\"single\" [(selection)]=\"selectedFiles3\"></p-tree>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Débora\Desktop\pablo\pablo-birth-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "04hL":
    /*!*************************************************!*\
      !*** ./src/app/demo/service/customerservice.ts ***!
      \*************************************************/

    /*! exports provided: CustomerService */

    /***/
    function hL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
        return CustomerService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CustomerService = /*#__PURE__*/function () {
        function CustomerService(http) {
          _classCallCheck(this, CustomerService);

          this.http = http;
        }

        _createClass(CustomerService, [{
          key: "getCustomersSmall",
          value: function getCustomersSmall() {
            return this.http.get('assets/demo/data/customers-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getCustomersMedium",
          value: function getCustomersMedium() {
            return this.http.get('assets/demo/data/customers-medium.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getCustomersLarge",
          value: function getCustomersLarge() {
            return this.http.get('assets/demo/data/customers-large.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return CustomerService;
      }();

      CustomerService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CustomerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CustomerService);
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "aSPh");
      /* harmony import */


      var _home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.scss */
      "HRNH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_app_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.main.component */
      "mqcR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_demo_service_productservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/demo/service/productservice */
      "ibcK");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(productService, router, breadcrumbService, appMain) {
          _classCallCheck(this, HomeComponent);

          this.productService = productService;
          this.router = router;
          this.breadcrumbService = breadcrumbService;
          this.appMain = appMain;
          this.activeOrders = 0;
          this.activeTraffic = 0;
          this.val1 = 1;
          this.val2 = 2;
          this.breadcrumbService.setItems([{
            label: 'Main'
          }, {
            label: 'Home',
            routerLink: ['/home']
          }]);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.productService.getProducts().then(function (data) {
              return _this.products = data;
            });
            this.productService.getProducts().then(function (data) {
              return _this.productsThisWeek = data;
            });
            this.productService.getProductsMixed().then(function (data) {
              return _this.productsLastWeek = data;
            });
            this.ordersChart = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
              datasets: [{
                label: 'Revenue',
                data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
                borderColor: ['#00acac'],
                borderWidth: 2,
                fill: false,
                borderDash: [3, 6]
              }, {
                label: 'Cost',
                data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
                borderColor: ['#f1b263'],
                backgroundColor: ['rgba(241, 178, 99, .07)'],
                borderWidth: 2,
                fill: true,
                pointRadius: 3
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
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }],
                xAxes: [{
                  ticks: {
                    fontColor: '#A0A7B5'
                  },
                  gridLines: {
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }]
              }
            };
            this.trafficChart = this.getTrafficChartData();
            this.trafficOptions = {
              legend: {
                display: false
              },
              responsive: true,
              cutoutPercentage: 75
            };

            this.appMain['refreshTrafficChart'] = function () {
              _this.trafficChart = _this.getTrafficChartData();
            };

            this.goalOptions = {
              legend: {
                display: false
              },
              responsive: true
            };
            this.items = [// { label: 'See Options', icon: 'pi pi-comment', command: () => this.OnPeopleHate(this.selectedItem) },
            {
              label: 'Profile',
              icon: 'pi pi-user',
              command: function command() {
                return _this.OnPeopleProfile(_this.selectedItem);
              }
            }];
            this.orderWeek = [{
              name: 'This Week',
              code: '0'
            }, {
              name: 'Last Week',
              code: '1'
            }];
          }
        }, {
          key: "getTrafficChartData",
          value: function getTrafficChartData() {
            return {
              labels: ['Add View', 'Total View'],
              datasets: [{
                data: [98, 100],
                backgroundColor: [getComputedStyle(document.body).getPropertyValue('--primary-dark-color') || '#2c84d8', getComputedStyle(document.body).getPropertyValue('--content-alt-bg-color') || '#B1B9C9'],
                borderWidth: 0
              }]
            };
          }
        }, {
          key: "changeDataset",
          value: function changeDataset(event) {
            var dataSet = [[31, 83, 69, 29, 62, 25, 59, 26, 46], [40, 29, 7, 73, 81, 69, 46, 21, 96]];
            var dataSet2 = [[67, 98, 27, 88, 38, 3, 22, 60, 56], [74, 67, 11, 36, 100, 49, 34, 56, 45]];
            this.activeOrders = parseInt(event.currentTarget.getAttribute('data-index'));
            this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[1].data = dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
            this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
          }
        }, {
          key: "changeTrafficset",
          value: function changeTrafficset(event) {
            var traffidDataSet = [[70800, 100], [70800, 100], [70700, 100], [70700, 100], [70500, 100]];
            this.activeTraffic = parseInt(event.currentTarget.getAttribute('data-index'));
            this.trafficChart.datasets[0].data = traffidDataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
          }
        }, {
          key: "OnPeopleHate",
          value: function OnPeopleHate(id) {
            this.router.navigate(['/pabloByPeople/' + id]);
          }
        }, {
          key: "OnPeopleProfile",
          value: function OnPeopleProfile(id) {
            this.router.navigate(['/profile/' + id]);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: src_app_demo_service_productservice__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_7__["AppBreadcrumbService"]
        }, {
          type: src_app_app_main_component__WEBPACK_IMPORTED_MODULE_4__["AppMainComponent"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeComponent);
      /***/
    },

    /***/
    "1NmO":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/filedemo.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function NmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>Advanced</h5>\r\n            <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\"\r\n                          multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\">\r\n                <ng-template pTemplate=\"content\">\r\n                    <ul *ngIf=\"uploadedFiles.length\">\r\n                        <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\r\n                    </ul>\r\n                </ng-template>\r\n            </p-fileUpload>\r\n\r\n            <h5>Basic</h5>\r\n            <p-fileUpload mode=\"basic\" name=\"demo[]\" url=\"./upload.php\" accept=\"image/*\" maxFileSize=\"1000000\" (onUpload)=\"onBasicUpload($event)\"></p-fileUpload>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "2NkY":
    /*!***************************************************!*\
      !*** ./src/app/pages/quizz/app.crud.component.ts ***!
      \***************************************************/

    /*! exports provided: AppCrudComponent */

    /***/
    function NkY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCrudComponent", function () {
        return AppCrudComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_crud_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.crud.component.html */
      "ZmMs");
      /* harmony import */


      var _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabledemo.scss */
      "E0JW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");

      var AppCrudComponent = /*#__PURE__*/function () {
        function AppCrudComponent() {
          _classCallCheck(this, AppCrudComponent);

          this.start = false;
          this.gameover = false;
          this.buttonname = "Play";
          this.questions = [{
            id: 1,
            question: 'Aniversário do Pablo',
            option: [{
              optionid: 1,
              name: '19/06'
            }, {
              optionid: 2,
              name: '18/06'
            }, {
              optionid: 3,
              name: '19/07'
            }, {
              optionid: 4,
              name: '29/06'
            }],
            answer: 2,
            selected: 0
          }, {
            id: 2,
            question: 'Esporte favorito do Pablo',
            option: [{
              optionid: 1,
              name: 'Volei'
            }, {
              optionid: 2,
              name: 'Futebol'
            }, {
              optionid: 3,
              name: 'Handbol'
            }, {
              optionid: 4,
              name: 'Natação'
            }],
            answer: 1,
            selected: 0
          }, {
            id: 3,
            question: 'Qual é o nome completo do Pablo?',
            option: [{
              optionid: 1,
              name: 'Pablo Elisandro Fiori'
            }, {
              optionid: 2,
              name: 'Pablo Elizandro Fiori'
            }, {
              optionid: 3,
              name: 'Pablo Elizandro Fiori de Paula'
            }, {
              optionid: 4,
              name: 'Pablo Elisandro Fiori do Rocio'
            }],
            answer: 3,
            selected: 0
          }, {
            id: 4,
            question: 'Um dos costumes mais fortes do Pablo',
            option: [{
              optionid: 1,
              name: 'Lavar a mão a todo momento'
            }, {
              optionid: 2,
              name: 'Tirar o tênis assim que chega na casa'
            }, {
              optionid: 3,
              name: 'Tomar 3 banhos por dia'
            }, {
              optionid: 4,
              name: 'Ler um livro por semana'
            }],
            answer: 1,
            selected: 0
          }, {
            id: 5,
            question: 'Qual dessas coisas o Pablo nunca fez?',
            option: [{
              optionid: 1,
              name: 'Deu aula de Inglês'
            }, {
              optionid: 2,
              name: 'Apresentou em um grupo de dança'
            }, {
              optionid: 3,
              name: 'Já trabalhou como palhaço em festas infantis'
            }, {
              optionid: 4,
              name: 'Deu aula de dança'
            }],
            answer: 3,
            selected: 0
          }, {
            id: 6,
            question: 'O Pablo prefere:',
            option: [{
              optionid: 1,
              name: 'Chá'
            }, {
              optionid: 2,
              name: 'Café'
            }],
            answer: 2,
            selected: 0
          }, {
            id: 7,
            question: 'Campeão do Pablo que ele mais acha lindo:',
            option: [{
              optionid: 1,
              name: 'Kai`sa'
            }, {
              optionid: 2,
              name: 'Graves'
            }, {
              optionid: 3,
              name: 'Vayne'
            }, {
              optionid: 4,
              name: 'Ezreal'
            }],
            answer: 1,
            selected: 0
          }, {
            id: 8,
            question: 'Uma das músicas que mais lembra a juventude dele:',
            option: [{
              optionid: 1,
              name: 'Justin Timberlake - My Love'
            }, {
              optionid: 2,
              name: 'Jessie J - Who`s Laughing Now'
            }, {
              optionid: 3,
              name: 'Iggy Azalea - Fancy'
            }, {
              optionid: 4,
              name: 'MAGIC! - Rude'
            }],
            answer: 3,
            selected: 0
          }, {
            id: 9,
            question: 'Qual é o membro favorito de little mix do Pablo?',
            option: [{
              optionid: 1,
              name: 'Jesy Nelson'
            }, {
              optionid: 2,
              name: 'Jade Thirlwall'
            }, {
              optionid: 3,
              name: 'Perrie Edwards'
            }, {
              optionid: 4,
              name: 'Leigh-Anne Pinnock'
            }],
            answer: 4,
            selected: 0
          }, {
            id: 10,
            question: 'Qual é o suco de frutas favorito do Pablo?',
            option: [{
              optionid: 1,
              name: 'Laranja'
            }, {
              optionid: 2,
              name: 'Morango'
            }, {
              optionid: 3,
              name: 'Maracujá'
            }, {
              optionid: 4,
              name: 'Melancia'
            }],
            answer: 3,
            selected: 0
          }];
          this.currentIndex = 0;
          this.currentQuestionSet = this.questions[this.currentIndex];
        }

        _createClass(AppCrudComponent, [{
          key: "next",
          value: function next() {
            this.currentIndex = this.currentIndex + 1;
            this.currentQuestionSet = this.questions[this.currentIndex];
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            this.buttonname = "Replay";

            if (this.currentIndex + 1 == this.questions.length) {
              this.gameover = true;
              this.start = false;
              this.correct = 0;
              this.notAttempted = 0;
              this.questions.map(function (x) {
                if (x.selected != 0) {
                  if (x.selected == x.answer) _this2.correct = _this2.correct + 1;
                } else {
                  _this2.notAttempted = _this2.notAttempted + 1;
                }

                x.selected = 0;
              });
            }
          }
        }, {
          key: "startQuiz",
          value: function startQuiz() {
            this.gameover = false;
            this.currentIndex = 0;
            this.currentQuestionSet = this.questions[this.currentIndex];
            this.start = true;
          }
        }]);

        return AppCrudComponent;
      }();

      AppCrudComponent.ctorParameters = function () {
        return [];
      };

      AppCrudComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_app_crud_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]],
        styles: ["\n        :host ::ng-deep .p-dialog .product-image {\n            width: 150px;\n            margin: 0 auto 2rem auto;\n            display: block;\n        }\n\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {\n                text-align: center;\n            }\n\n            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:nth-child(6) {\n                display: flex;\n            }\n        }\n\n    ", _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppCrudComponent);
      /***/
    },

    /***/
    "3Li2":
    /*!***************************************************!*\
      !*** ./src/app/utilities/typography.component.ts ***!
      \***************************************************/

    /*! exports provided: TypographyComponent */

    /***/
    function Li2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () {
        return TypographyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./typography.component.html */
      "m++p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var TypographyComponent = function TypographyComponent(breadcrumbService) {
        _classCallCheck(this, TypographyComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Typography',
          routerLink: ['/utilities/typography']
        }]);
      };

      TypographyComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TypographyComponent);
      /***/
    },

    /***/
    "48V0":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/formlayoutdemo.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function V0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Vertical</h5>\r\n\t\t\t<div class=\"p-fluid\">\r\n\t\t\t\t<div class=\"p-field\">\r\n\t\t\t\t\t<label for=\"firstname1\">Name</label>\r\n\t\t\t\t\t<input id=\"firstname1\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field\">\r\n\t\t\t\t\t<label for=\"lastname1\">Email</label>\r\n\t\t\t\t\t<input id=\"lastname1\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field\">\r\n\t\t\t\t\t<label for=\"age1\">Age</label>\r\n\t\t\t\t\t<input id=\"age1\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Vertical Grid</h5>\r\n\t\t\t<div class=\"p-fluid p-formgrid p-grid\">\r\n\t\t\t\t<div class=\"p-field p-col\">\r\n\t\t\t\t\t<label for=\"firstname2\">Name</label>\r\n\t\t\t\t\t<input id=\"firstname2\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field p-col\">\r\n\t\t\t\t\t<label for=\"lastname2\">Email</label>\r\n\t\t\t\t\t<input id=\"lastname2\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Horizontal</h5>\r\n\t\t\t<div class=\"p-fluid\">\r\n\t\t\t\t<div class=\"p-field p-grid\">\r\n\t\t\t\t\t<label for=\"firstname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Name</label>\r\n\t\t\t\t\t<div class=\"p-col-12 p-md-10\">\r\n\t\t\t\t\t\t<input id=\"firstname4\" type=\"text\" pInputText>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field p-grid\">\r\n\t\t\t\t\t<label for=\"lastname4\" class=\"p-col-12 p-mb-2 p-md-2 p-mb-md-0\">Email</label>\r\n\t\t\t\t\t<div class=\"p-col-12 p-md-10\">\r\n\t\t\t\t\t\t<input id=\"lastname4\" type=\"text\" pInputText>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Inline</h5>\r\n\t\t\t<div class=\"p-formgroup-inline\">\r\n\t\t\t\t<div class=\"p-field\">\r\n\t\t\t\t\t<label for=\"firstname5\" class=\"p-sr-only\">Firstname</label>\r\n\t\t\t\t\t<input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Firstname\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field\">\r\n\t\t\t\t\t<label for=\"lastname5\" class=\"p-sr-only\">Lastname</label>\r\n\t\t\t\t\t<input id=\"lastname5\" type=\"text\" pInputText placeholder=\"Lastname\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<button pButton pRipple type=\"button\" label=\"Submit\"></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Help Text</h5>\r\n\t\t\t<div class=\"p-field p-fluid\">\r\n\t\t\t\t<label for=\"username\">Username</label>\r\n\t\t\t\t<input id=\"username\" type=\"username\" pInputText aria-describedby=\"username-help\">\r\n\t\t\t\t<small id=\"username-help\">Enter your username to reset your password.</small>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Advanced</h5>\r\n\t\t\t<div class=\"p-fluid p-formgrid p-grid\">\r\n\t\t\t\t<div class=\"p-field p-col-12 p-md-6\">\r\n\t\t\t\t\t<label for=\"firstname6\">Firstname</label>\r\n\t\t\t\t\t<input id=\"firstname6\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field p-col-12 p-md-6\">\r\n\t\t\t\t\t<label for=\"lastname6\">Lastname</label>\r\n\t\t\t\t\t<input id=\"lastname6\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field p-col-12\">\r\n\t\t\t\t\t<label for=\"address\">Address</label>\r\n\t\t\t\t\t<textarea id=\"address\" type=\"text\" rows=\"4\" pInputTextarea></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field p-col-12 p-md-6\">\r\n\t\t\t\t\t<label for=\"city\">City</label>\r\n\t\t\t\t\t<input id=\"city\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field p-col-12 p-md-3\">\r\n\t\t\t\t\t<label for=\"state\">State</label>\r\n\t\t\t\t\t<p-dropdown inputId=\"state\" [options]=\"states\" [(ngModel)]=\"selectedState\" placeholder=\"Select\" optionLabel=\"name\"></p-dropdown>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-field p-col-12 p-md-3\">\r\n\t\t\t\t\t<label for=\"zip\">Zip</label>\r\n\t\t\t\t\t<input id=\"zip\" type=\"text\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "4Pek":
    /*!*****************************************************!*\
      !*** ./src/app/demo/view/overlaysdemo.component.ts ***!
      \*****************************************************/

    /*! exports provided: OverlaysDemoComponent */

    /***/
    function Pek(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OverlaysDemoComponent", function () {
        return OverlaysDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_overlaysdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./overlaysdemo.component.html */
      "GlPy");
      /* harmony import */


      var _overlaysdemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./overlaysdemo.scss */
      "++GG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");

      var OverlaysDemoComponent = /*#__PURE__*/function () {
        function OverlaysDemoComponent(productService, confirmationService, messageService, breadcrumbService) {
          _classCallCheck(this, OverlaysDemoComponent);

          this.productService = productService;
          this.confirmationService = confirmationService;
          this.messageService = messageService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Overlay',
            routerLink: ['/uikit/overlay']
          }]);
        }

        _createClass(OverlaysDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.productService.getProductsSmall().then(function (products) {
              return _this3.products = products;
            });
            this.images = [];
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos1.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg',
              title: 'Sopranos 1'
            });
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos2.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg',
              title: 'Sopranos 2'
            });
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos3.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg',
              title: 'Sopranos 3'
            });
            this.images.push({
              source: 'assets/demo/images/sopranos/sopranos4.jpg',
              thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg',
              title: 'Sopranos 4'
            });
          }
        }, {
          key: "confirm1",
          value: function confirm1() {
            this.confirmationService.confirm({
              key: 'confirm1',
              message: 'Are you sure to perform this action?'
            });
          }
        }, {
          key: "confirm2",
          value: function confirm2(event) {
            var _this4 = this;

            this.confirmationService.confirm({
              key: 'confirm2',
              target: event.target,
              message: 'Are you sure that you want to proceed?',
              icon: 'pi pi-exclamation-triangle',
              accept: function accept() {
                _this4.messageService.add({
                  severity: 'info',
                  summary: 'Confirmed',
                  detail: 'You have accepted'
                });
              },
              reject: function reject() {
                _this4.messageService.add({
                  severity: 'error',
                  summary: 'Rejected',
                  detail: 'You have rejected'
                });
              }
            });
          }
        }]);

        return OverlaysDemoComponent;
      }();

      OverlaysDemoComponent.ctorParameters = function () {
        return [{
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
        }, {
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["AppBreadcrumbService"]
        }];
      };

      OverlaysDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_overlaysdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
        styles: [_overlaysdemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OverlaysDemoComponent);
      /***/
    },

    /***/
    "4Sr2":
    /*!*********************************************!*\
      !*** ./src/app/demo/service/iconservice.ts ***!
      \*********************************************/

    /*! exports provided: IconService */

    /***/
    function Sr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconService", function () {
        return IconService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var IconService = /*#__PURE__*/function () {
        function IconService(http) {
          _classCallCheck(this, IconService);

          this.http = http;
          this.apiUrl = 'assets/demo/data/icons.json';
        }

        _createClass(IconService, [{
          key: "getIcons",
          value: function getIcons() {
            var _this5 = this;

            return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
              _this5.icons = response.icons;
              return _this5.icons;
            }));
          }
        }]);

        return IconService;
      }();

      IconService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      IconService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IconService);
      /***/
    },

    /***/
    "4U8t":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/tabledemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function U8t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid table-demo\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Default</h5>\r\n\t\t\t<p>Pagination, sorting, filtering and checkbox selection.</p>\r\n\t\t\t<p-table #dt [value]=\"customers1\" [(selection)]=\"selectedCustomers1\" dataKey=\"id\"\r\n\t\t\t\t\t styleClass=\"p-datatable-customers\" [rowHover]=\"true\" [rows]=\"10\" [paginator]=\"true\"\r\n\t\t\t\t\t [filterDelay]=\"0\" [globalFilterFields]=\"['name','country.name','representative.name','status']\">\r\n\t\t\t\t<ng-template pTemplate=\"caption\">\r\n\t\t\t\t\t<div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\r\n\t\t\t\t\t\tCustomers\r\n\t\t\t\t\t\t<span class=\"p-input-icon-left\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\"\r\n\t\t\t\t\t\t   placeholder=\"Global Search\"/>\r\n                </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"header\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th style=\"width: 3rem\">\r\n\t\t\t\t\t\t\t<p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"name\">\r\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\r\n\t\t\t\t\t\t\t\tName\r\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"name\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"text\" field=\"name\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"country.name\">\r\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\r\n\t\t\t\t\t\t\t\tCountry\r\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"country.name\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"text\" field=\"country.name\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"representative.name\">\r\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\r\n\t\t\t\t\t\t\t\tAgent\r\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"representative.name\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t<p-columnFilter field=\"representative\" matchMode=\"in\" display=\"menu\" [showMatchModes]=\"false\" [showOperator]=\"false\" [showAddButton]=\"false\">\r\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"header\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"p-px-3 p-pt-3 p-pb-0\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"p-text-bold\">Agent Picker</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"filter\" let-value let-filter=\"filterCallback\">\r\n\t\t\t\t\t\t\t\t\t\t<p-multiSelect [ngModel]=\"value\" [options]=\"representatives\" placeholder=\"Any\" (onChange)=\"filter($event.value)\" optionLabel=\"name\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template let-option pTemplate=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"p-multiselect-representative-option\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img [alt]=\"option.label\" src=\"assets/demo/images/avatar/{{option.image}}\" width=\"32\" style=\"vertical-align: middle\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"p-ml-1\">{{option.name}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t</p-multiSelect>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</p-columnFilter>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"date\">\r\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\r\n\t\t\t\t\t\t\t\tDate\r\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"date\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"date\" field=\"date\" display=\"menu\" class=\"p-ml-auto\"></p-columnFilter>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"balance\">\r\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\r\n\t\t\t\t\t\t\t\tBalance\r\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"balance\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t<p-columnFilter type=\"numeric\" field=\"balance\" display=\"menu\" currency=\"USD\" class=\"p-ml-auto\"></p-columnFilter>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"status\">\r\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\r\n\t\t\t\t\t\t\t\tStatus\r\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"status\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t<p-columnFilter field=\"status\" matchMode=\"equals\" display=\"menu\">\r\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"filter\" let-value let-filter=\"filterCallback\">\r\n\t\t\t\t\t\t\t\t\t\t<p-dropdown [ngModel]=\"value\" [options]=\"statuses\" (onChange)=\"filter($event.value)\" placeholder=\"Any\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template let-option pTemplate=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + option.value\">{{option.label}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t</p-dropdown>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</p-columnFilter>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"activity\">\r\n\t\t\t\t\t\t\t<div class=\"p-d-flex p-jc-between p-ai-center\">\r\n\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t<p-sortIcon field=\"activity\"></p-sortIcon>\r\n\t\t\t\t\t\t\t\t<p-columnFilter field=\"activity\" matchMode=\"between\" display=\"menu\" [showMatchModes]=\"false\" [showOperator]=\"false\" [showAddButton]=\"false\">\r\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"filter\" let-filter=\"filterCallback\">\r\n\t\t\t\t\t\t\t\t\t\t<p-slider [ngModel]=\"activityValues\" [range]=\"true\" (onSlideEnd)=\"filter($event.values)\" styleClass=\"p-m-3\"></p-slider>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"p-d-flex p-ai-center p-jc-between p-px-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span>{{activityValues[0]}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>{{activityValues[1]}}</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</p-columnFilter>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th style=\"width: 8rem\"></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"body\" let-customer>\r\n\t\t\t\t\t<tr class=\"p-selectable-row\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<p-tableCheckbox [value]=\"customer\"></p-tableCheckbox>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Name</span>\r\n\t\t\t\t\t\t\t{{customer.name}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Country</span>\r\n\t\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\"\r\n\t\t\t\t\t\t\t\t [class]=\"'flag flag-' + customer.country.code\" width=\"30\">\r\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.country.name}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Representative</span>\r\n\t\t\t\t\t\t\t<img [alt]=\"customer.representative.name\"\r\n\t\t\t\t\t\t\t\t src=\"assets/demo/images/avatar/{{customer.representative.image}}\" width=\"32\"\r\n\t\t\t\t\t\t\t\t style=\"vertical-align: middle\"/>\r\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.representative.name}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Date</span>\r\n\t\t\t\t\t\t\t{{customer.date | date: 'MM/dd/yyyy'}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Balance</span>\r\n\t\t\t\t\t\t\t{{customer.balance | currency:'USD':'symbol'}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Status</span>\r\n\t\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + customer.status\">{{customer.status}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Activity</span>\r\n\t\t\t\t\t\t\t<p-progressBar [value]=\"customer.activity\" [showValue]=\"false\"></p-progressBar>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td style=\"text-align: center\">\r\n\t\t\t\t\t\t\t<button pButton type=\"button\" class=\"p-button-secondary\" icon=\"pi pi-cog\"></button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"emptymessage\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"8\">No customers found.</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Customized</h5>\r\n\t\t\t<p>Scrollable table with gridlines (<mark>.p-datatable-gridlines</mark>), striped rows (<mark>.p-datatable-striped</mark>) and smaller paddings (<mark>p-datatable-sm</mark>).</p>\r\n\r\n\t\t\t<p-table #dtc [value]=\"customers2\" [(selection)]=\"selectedCustomer\" dataKey=\"id\" selectionMode=\"single\"\r\n\t\t\t\t\t styleClass=\"p-datatable-customers p-datatable-gridlines p-datatable-striped p-datatable-sm\"\r\n\t\t\t\t\t [scrollable]=\"true\" scrollHeight=\"600px\" [filterDelay]=\"0\" [globalFilterFields]=\"['name','country.name','representative.name','status']\">\r\n\t\t\t\t<ng-template pTemplate=\"caption\">\r\n\t\t\t\t\t<div class=\"p-d-flex p-flex-column p-flex-md-row p-jc-md-between table-header\">\r\n\t\t\t\t\t\tCustomers\r\n\t\t\t\t\t\t<span class=\"p-input-icon-left\">\r\n                    <i class=\"pi pi-search\"></i>\r\n                    <input pInputText type=\"text\" (input)=\"dtc.filterGlobal($event.target.value, 'contains')\"\r\n\t\t\t\t\t\t   placeholder=\"Global Search\"/>\r\n                </span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"header\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th pSortableColumn=\"name\">Name\r\n\t\t\t\t\t\t\t<p-sortIcon field=\"name\"></p-sortIcon>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"country.name\">Country\r\n\t\t\t\t\t\t\t<p-sortIcon field=\"country.name\"></p-sortIcon>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"representative.name\">Representative\r\n\t\t\t\t\t\t\t<p-sortIcon field=\"representative.name\"></p-sortIcon>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"date\">Date\r\n\t\t\t\t\t\t\t<p-sortIcon field=\"date\"></p-sortIcon>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"status\">Status\r\n\t\t\t\t\t\t\t<p-sortIcon field=\"status\"></p-sortIcon>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"activity\">Activity\r\n\t\t\t\t\t\t\t<p-sortIcon field=\"activity\"></p-sortIcon>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"body\" let-customer>\r\n\t\t\t\t\t<tr [pSelectableRow]=\"customer\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Name</span>\r\n\t\t\t\t\t\t\t{{customer.name}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Country</span>\r\n\t\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\"\r\n\t\t\t\t\t\t\t\t [class]=\"'flag flag-' + customer.country.code\" width=\"30\">\r\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.country.name}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Representative</span>\r\n\t\t\t\t\t\t\t<img [alt]=\"customer.representative.name\"\r\n\t\t\t\t\t\t\t\t src=\"assets/demo/images/avatar/{{customer.representative.image}}\" width=\"32\"\r\n\t\t\t\t\t\t\t\t style=\"vertical-align: middle\"/>\r\n\t\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em;vertical-align: middle\">{{customer.representative.name}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Date</span>\r\n\t\t\t\t\t\t\t{{customer.date}}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Status</span>\r\n\t\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + customer.status\">{{customer.status}}</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<span class=\"p-column-title\">Activity</span>\r\n\t\t\t\t\t\t\t<p-progressBar [value]=\"customer.activity\" [showValue]=\"false\"></p-progressBar>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"emptymessage\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"8\">No customers found.</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-table>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Row Expand</h5>\r\n\t\t\t<p-table [value]=\"products\" dataKey=\"name\" styleClass=\"p-datatable-customers rowexpand-table\">\r\n\t\t\t\t<ng-template pTemplate=\"header\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th style=\"width: 3rem\"></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"name\">Name <p-sortIcon field=\"name\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th>Image</th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"price\">Price <p-sortIcon field=\"price\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"category\">Category <p-sortIcon field=\"category\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"rating\">Reviews <p-sortIcon field=\"rating\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"inventoryStatus\">Status <p-sortIcon field=\"inventoryStatus\"></p-sortIcon></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"body\" let-product let-expanded=\"expanded\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button type=\"button\" pButton pRipple [pRowToggler]=\"product\" class=\"p-button-text p-button-rounded p-button-plain\" [icon]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Name</span>{{product.name}}</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Image</span><img [src]=\"'assets/demo/images/product/' + product.image\" [alt]=\"product.name\" width=\"100\" class=\"p-shadow-4\" /></td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Price</span>{{product.price | currency:'USD'}}</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Category</span>{{product.category}}</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Reviews</span><p-rating [ngModel]=\"product.rating\" [readonly]=\"true\" [cancel]=\"false\"></p-rating></td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Status</span><span [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"rowexpansion\" let-product>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"7\">\r\n\t\t\t\t\t\t\t<div class=\"p-p-3\">\r\n\t\t\t\t\t\t\t\t<p-table [value]=\"product.orders\" dataKey=\"id\">\r\n\t\t\t\t\t\t\t\t\t<ng-template pTemplate=\"header\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th pSortableColumn=\"id\">Id <p-sortIcon field=\"price\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"customer\">Customer <p-sortIcon field=\"customer\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"date\">Date <p-sortIcon field=\"date\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"amount\">Amount <p-sortIcon field=\"amount\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th pSortableColumn=\"stats\">Status <p-sortIcon field=\"status\"></p-sortIcon></th>\r\n\t\t\t\t\t\t<th style=\"width: 4rem\"></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"body\" let-order>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Id</span>{{order.id}}</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Customer</span>{{order.customer}}</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Date</span>{{order.date}}</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Amount</span>{{order.amount | currency:'USD'}}</td>\r\n\t\t\t\t\t\t<td><span class=\"p-column-title\">Status</span><span [class]=\"'order-badge order-' + order.status.toLowerCase()\">{{order.status}}</span></td>\r\n\t\t\t\t\t\t<td><p-button type=\"button\" icon=\"pi pi-search\"></p-button></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template pTemplate=\"emptymessage\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td colspan=\"6\">There are no order for this product yet.</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-table>\r\n\t\t</div>\r\n\t\t</td>\r\n\t\t</tr>\r\n\t\t</ng-template>\r\n\t\t</p-table>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"p-col-12\">\r\n\t<div class=\"card\">\r\n\t\t<h5>Row Group and Scrolling</h5>\r\n\t\t<p-table [value]=\"customers3\" sortField=\"representative.name\" sortMode=\"single\" (onSort)=\"onSort()\" [scrollable]=\"true\" scrollHeight=\"600px\"\r\n\t\t\t\t styleClass=\"p-datatable-customers\">\r\n\t\t\t<ng-template pTemplate=\"header\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t<th>Country</th>\r\n\t\t\t\t\t<th>Company</th>\r\n\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t<th>Date</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</ng-template>\r\n\t\t\t<ng-template pTemplate=\"body\" let-customer let-rowIndex=\"rowIndex\">\r\n\t\t\t\t<tr *ngIf=\"rowGroupMetadata[customer.representative.name].index === rowIndex\">\r\n\t\t\t\t\t<td colspan=\"5\">\r\n\t\t\t\t\t\t<img [alt]=\"customer.representative.name\" src=\"assets/demo/images/avatar/{{customer.representative.image}}\" width=\"32\" style=\"vertical-align: middle\" />\r\n\t\t\t\t\t\t<span class=\"p-text-bold p-ml-2\">{{customer.representative.name}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td><span class=\"p-column-title\">Name</span>\r\n\t\t\t\t\t\t{{customer.name}}\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><span class=\"p-column-title\">Country</span>\r\n\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\" [class]=\"'flag flag-' + customer.country.code\" width=\"30\">\r\n\t\t\t\t\t\t<span class=\"image-text\" style=\"margin-left: .5em\">{{customer.country.name}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><span class=\"p-column-title\">Company</span>\r\n\t\t\t\t\t\t{{customer.company}}\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><span class=\"p-column-title\">Status</span>\r\n\t\t\t\t\t\t<span [class]=\"'customer-badge status-' + customer.status\">{{customer.status}}</span>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><span class=\"p-column-title\">Date</span>\r\n\t\t\t\t\t\t{{customer.date}}\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</ng-template>\r\n\t\t</p-table>\r\n\t</div>\r\n</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "5Od1":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/elevation.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Od1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Shadow</h4>\r\n\t\t\t<p>Elevation is an add-on utility of <a href=\"https://github.com/primefaces/primeflex\">PrimeFlex</a> and used to specify the separation between surfaces and elements along the z-axis.</p>\r\n\r\n\t\t\t<div class=\"p-grid\">\r\n\t\t\t\t<div *ngFor=\"let box of boxes; index as i\" [class]=\"'box p-shadow-' + (i + 1)\">\r\n\t\t\t\t\tp-shadow-{{i + 1}}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "66gQ":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/dashboard.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function gQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-dashboard\">\r\n    <div class=\"p-grid\">\r\n        <div class=\"p-col-12 p-md-12 p-xl-9\">\r\n            <div class=\"p-grid\">\r\n                <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n                    <div class=\"card overview-box-1 blue\">\r\n                        <div class=\"card-header\">\r\n                            <h6>Revenue Status</h6>\r\n                            <div class=\"header-buttons\">\r\n                                <a href=\"#\"><i class=\"pi pi-arrow-up\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"overview-content\">\r\n                            <h3>87363</h3>\r\n                            <div class=\"overview-graph\">\r\n                                <span style=\"height: 12px;\"><span class=\"graph-tooltip\">12</span></span>\r\n                                <span style=\"height: 40px;\"><span class=\"graph-tooltip\">40</span></span>\r\n                                <span style=\"height: 26px;\"><span class=\"graph-tooltip\">26</span></span>\r\n                                <span style=\"height: 17px;\"><span class=\"graph-tooltip\">17</span></span>\r\n                                <span style=\"height: 36px;\"><span class=\"graph-tooltip\">36</span></span>\r\n                                <span style=\"height: 51px;\"><span class=\"graph-tooltip\">51</span></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"overview-footer\">\r\n                            <span><i class=\"pi pi-arrow-up\"></i> <span>55%</span> increase in today sales</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n                    <div class=\"card overview-box-1 teal\">\r\n                        <div class=\"card-header\">\r\n                            <h6>Page View</h6>\r\n                            <div class=\"header-buttons\">\r\n                                <a href=\"#\"><i class=\"pi pi-arrow-up\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"overview-content\">\r\n                            <h3>5592</h3>\r\n                            <div class=\"overview-graph\">\r\n                                <span style=\"height: 30px;\"><span class=\"graph-tooltip\">30</span></span>\r\n                                <span style=\"height: 43px;\"><span class=\"graph-tooltip\">43</span></span>\r\n                                <span style=\"height: 48px;\"><span class=\"graph-tooltip\">48</span></span>\r\n                                <span style=\"height: 40px;\"><span class=\"graph-tooltip\">40</span></span>\r\n                                <span style=\"height: 52px;\"><span class=\"graph-tooltip\">52</span></span>\r\n                                <span style=\"height: 18px;\"><span class=\"graph-tooltip\">18</span></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"overview-footer down\">\r\n                            <span><i class=\"pi pi-arrow-down\"></i> <span>12%</span> decrease in today sales</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n                    <div class=\"card  overview-box-1 orange\">\r\n                        <div class=\"card-header\">\r\n                            <h6>Bounce Rate</h6>\r\n                            <div class=\"header-buttons\">\r\n                                <a href=\"#\"><i class=\"pi pi-arrow-up\"></i></a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"overview-content\">\r\n                            <h3>55.95%</h3>\r\n                            <div class=\"overview-graph\">\r\n                                <span style=\"height: 20px;\"><span class=\"graph-tooltip\">20</span></span>\r\n                                <span style=\"height: 23px;\"><span class=\"graph-tooltip\">23</span></span>\r\n                                <span style=\"height: 52px;\"><span class=\"graph-tooltip\">52</span></span>\r\n                                <span style=\"height: 18px;\"><span class=\"graph-tooltip\">18</span></span>\r\n                                <span style=\"height: 28px;\"><span class=\"graph-tooltip\">28</span></span>\r\n                                <span style=\"height: 42px;\"><span class=\"graph-tooltip\">42</span></span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"overview-footer\">\r\n                            <span><i class=\"pi pi-arrow-up\"></i> <span>6%</span> increase in today sales</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-col-12\">\r\n                    <div class=\"card sale-graph\">\r\n                        <div class=\"card-header\">\r\n                            <h6>Top Products</h6>\r\n                        </div>\r\n                        <div id=\"order-tabs-container\" class=\"order-tabs\">\r\n                            <div class=\"order-tab\" [ngClass]=\"{'order-tab-active':activeOrders===0}\"\r\n                                 (click)=\"changeDataset($event); orders.refresh()\"\r\n                                 data-label=\"New Sales\" data-index=\"0\" data-stroke=\"#00acac\" >\r\n                                <h6>Current Week</h6>\r\n                                <h3>$455.55</h3>\r\n                            </div>\r\n                            <div class=\"order-tab\" [ngClass]=\"{'order-tab-active':activeOrders===1}\"\r\n                                 (click)=\"changeDataset($event); orders.refresh()\"\r\n                                 data-label=\"Previous Sales\" data-index=\"1\" data-stroke=\"#2f8ee5\">\r\n                                <h6>Previous Week</h6>\r\n                                <h3>$244.40</h3>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"overview-chart\">\r\n                            <p-chart #orders type=\"line\" [data]=\"ordersChart\" [options]=\"ordersOptions\" [responsive]=\"true\"></p-chart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-3\">\r\n            <div class=\"p-grid\">\r\n                <div class=\"p-col-12 p-md-6 p-xl-12\">\r\n                    <div class=\"card traffic\">\r\n                        <div class=\"card-header\">\r\n                            <h6>Traffic</h6>\r\n                        </div>\r\n                        <span>26 May - 27 May</span>\r\n                        <div class=\"traffic-chart\">\r\n                            <p-chart #traffic type=\"doughnut\" [data]=\"trafficChart\" [options]=\"trafficOptions\" [responsive]=\"true\" width=\"210px\" height=\"210px\"></p-chart>\r\n                        </div>\r\n                        <div id=\"traffic-tabs-container\" class=\"traffic-tabs\">\r\n                            <div class=\"traffic-tab\" [ngClass]=\"{'traffic-tab-active':activeTraffic===0}\"\r\n                                 (click)=\"changeTrafficset($event); traffic.refresh()\"\r\n                                 data-label=\"New Sales\" data-index=\"0\"  >\r\n                                <h6>48%</h6>\r\n                                <i class=\"pi pi-facebook\"></i>\r\n                                <span>Facebook</span>\r\n                            </div>\r\n                            <div class=\"traffic-tab \" [ngClass]=\"{'traffic-tab-active':activeTraffic===1}\"\r\n                                 (click)=\"changeTrafficset($event); traffic.refresh()\"\r\n                                 data-label=\"Previous Sales\" data-index=\"1\">\r\n                                <h6>26%</h6>\r\n                                <i class=\"pi pi-twitter\"></i>\r\n                                <span>Twitter</span>\r\n                            </div>\r\n                            <div class=\"traffic-tab \" [ngClass]=\"{'traffic-tab-active':activeTraffic===2}\"\r\n                                 (click)=\"changeTrafficset($event); traffic.refresh()\"\r\n                                 data-label=\"Previous Sales\" data-index=\"2\">\r\n                                <h6>17%</h6>\r\n                                <i class=\"pi pi-github\"></i>\r\n                                <span>Github</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-col-12 p-md-6 p-xl-12\">\r\n                    <div class=\"card goals\">\r\n                        <div class=\"card-header\">\r\n                            <h6>Today's Goal</h6>\r\n                            <span><span>183</span> / 255</span>\r\n                        </div>\r\n                        <span>22 June, 2020</span>\r\n                        <div class=\"goal-graph\">\r\n                            <p-chart #goal type=\"pie\" [data]=\"goalChart\" [options]=\"goalOptions\" [responsive]=\"true\"></p-chart>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-6 p-xl-4\">\r\n            <div class=\"card leaderboard\">\r\n                <div class=\"card-header\">\r\n                    <h6>Leaderboard</h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-1.png\" alt=\"poseidon-layout\" />\r\n                            <p>Peter Taylor</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <h6>$224.44</h6>\r\n                            <i class=\"pi pi-arrow-up\"></i>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-2.png\" alt=\"poseidon-layout\" />\r\n                            <p>Nicolina Lindholm</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <h6>$86.05</h6>\r\n                            <i class=\"pi pi-arrow-up\"></i>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-3.png\" alt=\"poseidon-layout\" />\r\n                            <p>Su Hua</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <h6>$59.44</h6>\r\n                            <i class=\"pi pi-arrow-up\"></i>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-4.png\" alt=\"poseidon-layout\" />\r\n                            <p>Maria Illescas</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <h6>$12.32</h6>\r\n                            <i class=\"pi pi-arrow-up\"></i>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/layout/images/dashboard/avatar-dengra.png\" alt=\"poseidon-layout\" />\r\n                            <p>Ezequiel Dengra</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <h6>$12.32</h6>\r\n                            <i class=\"pi pi-arrow-up\"></i>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/layout/images/dashboard/avatar-conan.png\" alt=\"poseidon-layout\" />\r\n                            <p>Conan Matusov</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <h6>$12.32</h6>\r\n                            <i class=\"pi pi-arrow-up\"></i>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-1.png\" alt=\"poseidon-layout\" />\r\n                            <p>Hector Mariano</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <h6>$12.32</h6>\r\n                            <i class=\"pi pi-arrow-up\"></i>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-6 p-xl-4\">\r\n            <div class=\"card product-list\">\r\n                <div class=\"card-header\">\r\n                    <h6>Product List</h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-1.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Nike Air X12</p>\r\n                                <span>Sold <span>250</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-2.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Nike Sports Watch</p>\r\n                                <span>Sold <span>189</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-3.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Heinz Yellow Mustard</p>\r\n                                <span>Sold <span>24</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-4.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Beats Headphone</p>\r\n                                <span>Sold <span>24</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-down down\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-5.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Black Racing Bike</p>\r\n                                <span>Sold <span>24</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-6 p-xl-4\">\r\n            <div class=\"card sellers\">\r\n                <div class=\"card-header\">\r\n                    <h6>Seller List</h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-1.png\" alt=\"poseidon-layout\" />\r\n                            <p>Hector Mariano</p>\r\n                        </div>\r\n                        <span>Tier 1</span>\r\n                        <p-rating [(ngModel)]=\"val2\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu1 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu1.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-2.png\" alt=\"poseidon-layout\" />\r\n                            <p>Maria Illescas</p>\r\n                        </div>\r\n                        <span>Tier 2</span>\r\n                        <p-rating [(ngModel)]=\"val2\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu2 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu2.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-3.png\" alt=\"poseidon-layout\" />\r\n                            <p>Ngô Hải Giang</p>\r\n                        </div>\r\n                        <span>Tier 3</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu3 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu3.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-4.png\" alt=\"poseidon-layout\" />\r\n                            <p>Tamas Bunce</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu4 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu4.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/avatar-conan.png\" alt=\"poseidon-layout\" />\r\n                            <p>Conan Matusov</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu5 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu5.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-4.png\" alt=\"poseidon-layout\" />\r\n                            <p>Maria Illescas</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu6 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu6.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-3.png\" alt=\"poseidon-layout\" />\r\n                            <p>Su Hua</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu7 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu7.toggle($event)\"></button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-6 p-xl-4\">\r\n            <div class=\"card tasks\">\r\n                <div class=\"card-header\">\r\n                    <h6>Tasks</h6>\r\n                </div>\r\n                <div>\r\n                    <div class=\"task task-1\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>12</span> Orders to fulfill</div>\r\n                            <i class=\"pi pi-tag\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-2\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>40+</span> Payments to withdraw</div>\r\n                            <i class=\"pi pi-money-bill\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-3\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>4</span> Reports to revise</div>\r\n                            <i class=\"pi pi-file\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-4\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>6</span> Questions to respond</div>\r\n                            <i class=\"pi pi-comment\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-5\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>2</span> Chargebacks to review</div>\r\n                            <i class=\"pi pi-check-square\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-1\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>12</span> Orders to fulfill</div>\r\n                            <i class=\"pi pi-tag\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-2\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>40+</span> Payments to withdraw</div>\r\n                            <i class=\"pi pi-money-bill\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"p-col-12 p-xl-8\">\r\n            <div class=\"card sales\">\r\n                <div class=\"card-header\">\r\n                    <h4>Recent Sales</h4>\r\n                    <p-dropdown [options]=\"orderWeek\" [(ngModel)]=\"selectedOrderWeek\" optionLabel=\"name\" (onChange)=\"recentSales($event)\"\r\n                                styleClass=\"dashbard-demo-dropdown\" [ngStyle]=\"{'min-width': '8rem'}\"></p-dropdown>\r\n                </div>\r\n\r\n                <p>Your sales activity over time.</p>\r\n\r\n\r\n                <p-table [value]=\"products\" [paginator]=\"true\" [rows]=\"5\" styleClass=\"p-datatable-customers\">\r\n                    <ng-template pTemplate=\"header\">\r\n                        <tr>\r\n                            <th pSortableColumn=\"id\">ID\r\n                                <p-sortIcon field=\"id\"></p-sortIcon>\r\n                            </th>\r\n                            <th pSortableColumn=\"category\">Category\r\n                                <p-sortIcon field=\"category\"></p-sortIcon>\r\n                            </th>\r\n                            <th pSortableColumn=\"price\">Price\r\n                                <p-sortIcon field=\"price\"></p-sortIcon>\r\n                            </th>\r\n                            <th pSortableColumn=\"inventoryStatus\">Status\r\n                                <p-sortIcon field=\"inventoryStatus\"></p-sortIcon>\r\n                            </th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </ng-template>\r\n                    <ng-template pTemplate=\"body\" let-product>\r\n                        <tr>\r\n                            <td>\r\n                                <span class=\"p-column-title\">Id</span>\r\n                                {{product.id}}</td>\r\n                            <td>\r\n                                <span class=\"p-column-title\">Category</span>\r\n                                {{product.category}}</td>\r\n                            <td>\r\n                                <span class=\"p-column-title\">Price</span>\r\n                                {{product.price | currency:'USD'}}</td>\r\n                            <td>\r\n                                <span class=\"p-column-title\">Status</span>\r\n                                <span\r\n                                    [class]=\"'product-badge status-' + product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span>\r\n                            </td>\r\n                            <td style=\"text-align: center\">\r\n                                <button pButton type=\"button\" icon=\"pi pi-search\"></button>\r\n                            </td>\r\n                        </tr>\r\n                    </ng-template>\r\n                </p-table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "7APR":
    /*!*****************************************!*\
      !*** ./src/app/app.topbar.component.ts ***!
      \*****************************************/

    /*! exports provided: AppTopBarComponent */

    /***/
    function APR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppTopBarComponent", function () {
        return AppTopBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _pages_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/login/login.service */
      "fxZ6");

      var AppTopBarComponent = /*#__PURE__*/function () {
        function AppTopBarComponent(appMain, app, service, route) {
          _classCallCheck(this, AppTopBarComponent);

          this.appMain = appMain;
          this.app = app;
          this.service = service;
          this.route = route;
        }

        _createClass(AppTopBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.service.getDataUserLoggedIn().then(function (x) {
              return _this6.userLogged = x;
            });
          }
        }, {
          key: "onLoggout",
          value: function onLoggout() {
            this.service.logout();
            this.route.navigate(['/login']);
          }
        }]);

        return AppTopBarComponent;
      }();

      AppTopBarComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_2__["AppMainComponent"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        }, {
          type: _pages_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AppTopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-topbar',
        template: "\n        <div class=\"layout-topbar\">\n            <div class=\"layout-topbar-wrapper\">\n                <div class=\"layout-topbar-left\">\n                    <div class=\"layout-topbar-logo\" id=\"logolink\" style=\"cursor: pointer; outline: none;\" routerLink=\"/\">\n                        <img id=\"app-logo\"\n                             [src]=\"'assets/layout/images/pwhite.png'\"\n                             alt=\"poseidon-layout\">\n                    </div>\n                </div>\n\n                <div class=\"layout-topbar-right\">\n                    <a class=\"menu-button\" href=\"#\" (click)=\"appMain.onMenuButtonClick($event)\">\n                        <i class=\"pi pi-bars\"></i>\n                    </a>\n\n                    <ul class=\"layout-topbar-actions\">            \n                        <li #profile class=\"topbar-item user-profile\"\n                            [ngClass]=\"{'active-topmenuitem':appMain.activeTopbarItem === profile}\">\n                            <a href=\"#\" (click)=\"appMain.onTopbarItemClick($event,profile)\">\n                                <img class=\"profile-image\" src=\"{{userLogged?.image}}\" alt=\"demo\">\n                                <div class=\"profile-info\">\n                                    <h6>{{userLogged?.name}}</h6>\n                                    <span>{{userLogged?.profile}}</span>\n                                </div>\n                            </a>\n\n                            <ul class=\"fadeInDown\">\n                                <li class=\"layout-submenu-header\">\n                                    <img class=\"profile-image\" src=\"{{userLogged?.image}}\" alt=\"demo\">\n                                    <div class=\"profile-info\">\n                                    <h6>{{userLogged?.name}}</h6>\n                                    <span>{{userLogged?.profile}}</span>\n                                    </div>\n                                </li>\n                                <li role=\"menuitem\">\n                                    <a  [routerLink]=\"['/profile/', userLogged.id]\" (click)=\"appMain.onTopbarSubItemClick($event)\">\n                                        <i class=\"pi pi-user\"></i>\n                                        <h6>Profile</h6>\n                                    </a>\n                                </li>\n                                <li role=\"menuitem\">\n                                    <a (click)=\"onLoggout()\">\n                                        <i class=\"pi pi-power-off\"></i>\n                                        <h6>Logout</h6>\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    "
      })], AppTopBarComponent);
      /***/
    },

    /***/
    "7s2l":
    /*!*************************************************!*\
      !*** ./src/app/demo/view/filedemo.component.ts ***!
      \*************************************************/

    /*! exports provided: FileDemoComponent */

    /***/
    function s2l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileDemoComponent", function () {
        return FileDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_filedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./filedemo.component.html */
      "1NmO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var FileDemoComponent = /*#__PURE__*/function () {
        function FileDemoComponent(messageService, breadcrumbService) {
          _classCallCheck(this, FileDemoComponent);

          this.messageService = messageService;
          this.breadcrumbService = breadcrumbService;
          this.uploadedFiles = [];
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'File',
            routerLink: ['/uikit/file']
          }]);
        }

        _createClass(FileDemoComponent, [{
          key: "onUpload",
          value: function onUpload(event) {
            var _iterator = _createForOfIteratorHelper(event.files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var file = _step.value;
                this.uploadedFiles.push(file);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.messageService.add({
              severity: 'info',
              summary: 'Success',
              detail: 'File Uploaded'
            });
          }
        }, {
          key: "onBasicUpload",
          value: function onBasicUpload(event) {
            this.messageService.add({
              severity: 'info',
              summary: 'Success',
              detail: 'File Uploaded with Basic Mode'
            });
          }
        }]);

        return FileDemoComponent;
      }();

      FileDemoComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }, {
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbService"]
        }];
      };

      FileDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_filedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
      })], FileDemoComponent);
      /***/
    },

    /***/
    "8iZH":
    /*!**************************************************!*\
      !*** ./src/app/utilities/elevation.component.ts ***!
      \**************************************************/

    /*! exports provided: ElevationComponent */

    /***/
    function iZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElevationComponent", function () {
        return ElevationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_elevation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./elevation.component.html */
      "5Od1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var ElevationComponent = function ElevationComponent(breadcrumbService) {
        _classCallCheck(this, ElevationComponent);

        this.breadcrumbService = breadcrumbService;
        this.boxes = new Array(24);
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Elevation',
          routerLink: ['/utilities/elevation']
        }]);
      };

      ElevationComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      ElevationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_elevation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        .box {\n            min-height: 100px;\n            min-width: 150px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-weight: 600;\n            margin: 2rem;\n            border-radius: 4px;\n        }\n    "]
      })], ElevationComponent);
      /***/
    },

    /***/
    "8jOm":
    /*!***************************************************!*\
      !*** ./src/app/demo/view/panelsdemo.component.ts ***!
      \***************************************************/

    /*! exports provided: PanelsDemoComponent */

    /***/
    function jOm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelsDemoComponent", function () {
        return PanelsDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_panelsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./panelsdemo.component.html */
      "eCx7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");

      var PanelsDemoComponent = /*#__PURE__*/function () {
        function PanelsDemoComponent(breadcrumbService) {
          _classCallCheck(this, PanelsDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Panel',
            routerLink: ['/uikit/panel']
          }]);
        }

        _createClass(PanelsDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.items = [{
              label: 'Angular.io',
              icon: 'pi pi-external-link',
              url: 'http://angular.io'
            }, {
              label: 'Theming',
              icon: 'pi pi-bookmark',
              routerLink: ['/theming']
            }];
            this.cardMenu = [{
              label: 'Save',
              icon: 'pi pi-fw pi-check'
            }, {
              label: 'Update',
              icon: 'pi pi-fw pi-refresh'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }];
          }
        }]);

        return PanelsDemoComponent;
      }();

      PanelsDemoComponent.ctorParameters = function () {
        return [{
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      PanelsDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_panelsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        :host ::ng-deep button {\n            margin-right: .25em;\n            margin-left: .25em;\n        }\n\n        :host ::ng-deep .p-splitbutton button {\n            margin-right: 0;\n            margin-left: 0;\n        }\n\n        @media screen and (max-width: 960px) {\n            .card.toolbar-demo {\n                overflow: auto;\n            }\n        }\n    "]
      })], PanelsDemoComponent);
      /***/
    },

    /***/
    "8nPe":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/emptydemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function nPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>Para Pablo Fiori</h5>\r\n            <p></p>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "Bm+J":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/invalidstatedemo.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function BmJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-nogutter\">\r\n    <div class=\"card\" style=\"width: 100%\">\r\n        <h5>Invalid State</h5>\r\n        <p>All form components have an invalid state style to display the validation errors when ng-invalid ng-dirty combination is applied by Angular.</p>\r\n        <div class=\"p-fluid p-grid\">\r\n            <div class=\"p-col-12 p-md-6\">\r\n                <div class=\"p-field\">\r\n                    <label for=\"inputtext\">InputText</label>\r\n                    <input type=\"text\" id=\"inputtext\" pInputText class=\"ng-invalid ng-dirty\">\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <label for=\"autocomplete\">AutoComplete</label>\r\n                    <p-autoComplete inputId=\"autocomplete\" [(ngModel)]=\"value2\" [suggestions]=\"filteredCountries\" (completeMethod)=\"searchCountry($event)\" field=\"name\" class=\"ng-invalid ng-dirty\"></p-autoComplete>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <label for=\"calendar\">Calendar</label>\r\n                    <p-calendar inputId=\"calendar\" [(ngModel)]=\"value3\" class=\"ng-invalid ng-dirty\" [showIcon]=\"true\"></p-calendar>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <label for=\"chips\">Chips</label>\r\n                    <p-chips inputId=\"chips\" [(ngModel)]=\"value4\" class=\"ng-invalid ng-dirty\"></p-chips>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <label for=\"textarea\">Textarea</label>\r\n                    <textarea inputId=\"textarea\" rows=\"3\" cols=\"30\" [(ngModel)]=\"value9\" pInputTextarea class=\"ng-invalid ng-dirty\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"p-col-12 p-md-6\">\r\n                <div class=\"p-field\">\r\n                    <label for=\"inputmask\">InputMask</label>\r\n                    <p-inputMask inputId=\"inputmask\" mask=\"99/99/9999\" [(ngModel)]=\"value5\" class=\"ng-invalid ng-dirty\"></p-inputMask>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <label for=\"inputnumber\">InputNumber</label>\r\n                    <p-inputNumber inputId=\"inputnumber\" [(ngModel)]=\"value6\" class=\"ng-invalid ng-dirty\"></p-inputNumber>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <label for=\"dropdown\">Dropdown</label>\r\n                    <p-dropdown inputId=\"dropdown\" [autoDisplayFirst]=\"false\" [options]=\"cities\" [(ngModel)]=\"value7\" optionLabel=\"name\" class=\"ng-invalid ng-dirty\"></p-dropdown>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <label for=\"multiselect\">MultiSelect</label>\r\n                    <p-multiSelect inputId=\"multiselect\" [options]=\"cities\" [(ngModel)]=\"value7\" optionLabel=\"name\" [filter]=\"false\" class=\"ng-invalid ng-dirty\"></p-multiSelect>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Bxr+":
    /*!*********************************************!*\
      !*** ./src/app/pages/app.help.component.ts ***!
      \*********************************************/

    /*! exports provided: AppHelpComponent */

    /***/
    function Bxr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppHelpComponent", function () {
        return AppHelpComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_help_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.help.component.html */
      "J7uU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var AppHelpComponent = function AppHelpComponent(breadcrumbService) {
        _classCallCheck(this, AppHelpComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Pages'
        }, {
          label: 'Help',
          routerLink: ['/pages/help']
        }]);
      };

      AppHelpComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      AppHelpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_app_help_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppHelpComponent);
      /***/
    },

    /***/
    "CfVz":
    /*!*******************************************************!*\
      !*** ./src/app/demo/view/formlayoutdemo.component.ts ***!
      \*******************************************************/

    /*! exports provided: FormLayoutDemoComponent */

    /***/
    function CfVz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormLayoutDemoComponent", function () {
        return FormLayoutDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_formlayoutdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./formlayoutdemo.component.html */
      "48V0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var FormLayoutDemoComponent = function FormLayoutDemoComponent(breadcrumbService) {
        _classCallCheck(this, FormLayoutDemoComponent);

        this.breadcrumbService = breadcrumbService;
        this.selectedState = null;
        this.states = [{
          name: 'Arizona',
          code: 'Arizona'
        }, {
          name: 'California',
          value: 'California'
        }, {
          name: 'Florida',
          code: 'Florida'
        }, {
          name: 'Ohio',
          code: 'Ohio'
        }, {
          name: 'Washington',
          code: 'Washington'
        }];
        this.breadcrumbService.setItems([{
          label: 'Ui Kit'
        }, {
          label: 'Form Layout',
          routerLink: ['/uikit/formlayout']
        }]);
      };

      FormLayoutDemoComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      FormLayoutDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_formlayoutdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FormLayoutDemoComponent);
      /***/
    },

    /***/
    "CuUz":
    /*!************************************************!*\
      !*** ./src/app/demo/service/countryservice.ts ***!
      \************************************************/

    /*! exports provided: CountryService */

    /***/
    function CuUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountryService", function () {
        return CountryService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CountryService = /*#__PURE__*/function () {
        function CountryService(http) {
          _classCallCheck(this, CountryService);

          this.http = http;
        }

        _createClass(CountryService, [{
          key: "getCountries",
          value: function getCountries() {
            return this.http.get('assets/demo/data/countries.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return CountryService;
      }();

      CountryService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], CountryService);
      /***/
    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: AppLoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppLoginComponent", function () {
        return AppLoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "ywSW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.service */
      "fxZ6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppLoginComponent = /*#__PURE__*/function () {
        function AppLoginComponent(service, router) {
          _classCallCheck(this, AppLoginComponent);

          this.service = service;
          this.router = router;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
          });
        }

        _createClass(AppLoginComponent, [{
          key: "onSave",
          value: function onSave() {
            var _this7 = this;

            this.service.login(this.loginForm.get("login").value, this.loginForm.get("password").value).then(function (x) {
              _this7.errorMessage = x.toString();
              var isAuthenticated = localStorage.getItem("token");

              if (isAuthenticated !== null) {
                _this7.router.navigate(['/', 'home']);
              } else {
                _this7.router.navigate(['/', 'login']);
              }
            });
          }
        }]);

        return AppLoginComponent;
      }();

      AppLoginComponent.ctorParameters = function () {
        return [{
          type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AppLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppLoginComponent);
      /***/
    },

    /***/
    "DByU":
    /*!***************************************!*\
      !*** ./src/app/app.menu.component.ts ***!
      \***************************************/

    /*! exports provided: AppMenuComponent */

    /***/
    function DByU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMenuComponent", function () {
        return AppMenuComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppMenuComponent = /*#__PURE__*/function () {
        function AppMenuComponent(app) {
          _classCallCheck(this, AppMenuComponent);

          this.app = app;
        }

        _createClass(AppMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model = [{
              // label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'],
              label: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: ['/home']
            }, {
              label: 'Pablo By People',
              icon: 'pi pi-fw pi-star',
              routerLink: ['/uikit'],
              items: [{
                label: 'Dé',
                icon: 'pi pi-fw pi-heart',
                routerLink: ['/profile/1']
              }, {
                label: 'Math',
                icon: 'pi pi-fw pi-heart',
                routerLink: ['/profile/2']
              }, {
                label: 'Di',
                icon: 'pi pi-fw pi-heart',
                routerLink: ['/profile/3']
              }, {
                label: 'Helo',
                icon: 'pi pi-fw pi-heart',
                routerLink: ['/profile/4']
              }, {
                label: 'Mari',
                icon: 'pi pi-fw pi-heart',
                routerLink: ['/profile/5']
              }]
            }, {
              label: 'Media',
              icon: 'pi pi-fw pi-image',
              routerLink: ['utilities'],
              items: [{
                label: 'Photos',
                icon: 'pi pi-fw pi-image',
                routerLink: ['utilities/display']
              }, // { label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation'] },
              // { label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox'] },
              {
                label: 'To Watch',
                icon: 'pi pi-fw pi-search',
                routerLink: ['utilities/icons']
              }]
            }, {
              label: 'Quiz',
              icon: 'pi pi-fw pi-circle-off',
              routerLink: ['/pages'],
              items: [{
                label: 'Pablo Quizz',
                icon: 'pi pi-fw pi-pencil',
                routerLink: ['/pages/crud']
              }]
            }];
          }
        }]);

        return AppMenuComponent;
      }();

      AppMenuComponent.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }];
      };

      AppMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: "\n        <ul class=\"layout-menu\">\n            <li app-menuitem *ngFor=\"let item of model; let i = index;\" [item]=\"item\" [index]=\"i\" [root]=\"true\"></li>\n        </ul>\n    "
      })], AppMenuComponent);
      /***/
    },

    /***/
    "DlPI":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/inputdemo.component.ts ***!
      \**************************************************/

    /*! exports provided: InputDemoComponent */

    /***/
    function DlPI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputDemoComponent", function () {
        return InputDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inputdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inputdemo.component.html */
      "Dzrm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_countryservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/countryservice */
      "CuUz");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");

      var InputDemoComponent = /*#__PURE__*/function () {
        function InputDemoComponent(countryService, breadcrumbService) {
          _classCallCheck(this, InputDemoComponent);

          this.countryService = countryService;
          this.breadcrumbService = breadcrumbService;
          this.valSlider = 50;
          this.valColor = '#424242';
          this.valCheck = [];
          this.selectedMulti = [];
          this.valToggle = false;
          this.valueKnob = 20;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Input',
            routerLink: ['/uikit/input']
          }]);
        }

        _createClass(InputDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.countryService.getCountries().then(function (countries) {
              _this8.countries = countries;
            });
            this.cities = [{
              label: 'New York',
              value: {
                id: 1,
                name: 'New York',
                code: 'NY'
              }
            }, {
              label: 'Rome',
              value: {
                id: 2,
                name: 'Rome',
                code: 'RM'
              }
            }, {
              label: 'London',
              value: {
                id: 3,
                name: 'London',
                code: 'LDN'
              }
            }, {
              label: 'Istanbul',
              value: {
                id: 4,
                name: 'Istanbul',
                code: 'IST'
              }
            }, {
              label: 'Paris',
              value: {
                id: 5,
                name: 'Paris',
                code: 'PRS'
              }
            }];
            this.paymentOptions = [{
              name: 'Option 1',
              value: 1
            }, {
              name: 'Option 2',
              value: 2
            }, {
              name: 'Option 3',
              value: 3
            }];
          }
        }, {
          key: "filterCountry",
          value: function filterCountry(event) {
            var filtered = [];
            var query = event.query;

            for (var i = 0; i < this.countries.length; i++) {
              var country = this.countries[i];

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
              }
            }

            this.filteredCountries = filtered;
          }
        }]);

        return InputDemoComponent;
      }();

      InputDemoComponent.ctorParameters = function () {
        return [{
          type: _service_countryservice__WEBPACK_IMPORTED_MODULE_3__["CountryService"]
        }, {
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbService"]
        }];
      };

      InputDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_inputdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [":host ::ng-deep .p-multiselect {\n\t\tmin-width: 15rem;\n\t}\n\n\t:host ::ng-deep .multiselect-custom-virtual-scroll .p-multiselect {\n\t\tmin-width: 20rem;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .p-multiselect-label {\n\t\tpadding-top: .25rem;\n\t\tpadding-bottom: .25rem;\n\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-item.country-item-value {\n\t\tpadding: .25rem .5rem;\n\t\tborder-radius: 3px;\n\t\tdisplay: inline-flex;\n\t\tmargin-right: .5rem;\n\t\tbackground-color: var(--primary-color);\n\t\tcolor: var(--primary-color-text);\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-item.country-item-value img.flag {\n\t\twidth: 17px;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-item {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-item img.flag {\n\t\twidth: 18px;\n\t\tmargin-right: .5rem;\n\t}\n\n\t:host ::ng-deep .multiselect-custom .country-placeholder {\n\t\tpadding: 0.25rem;\n\t}\n\n\t:host ::ng-deep .p-colorpicker {\n\t\twidth: 2.5em\n\t}\n    "]
      })], InputDemoComponent);
      /***/
    },

    /***/
    "Dzrm":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/inputdemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dzrm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>InputText</h5>\r\n\t\t\t<div class=\"p-grid p-formgrid\">\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Default\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Disabled\" [disabled]=\"true\"/>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Invalid\" class=\"ng-dirty ng-invalid \"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h5>Icons</h5>\r\n\t\t\t<div class=\"p-grid p-formgrid\">\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<span class=\"p-input-icon-left\">\r\n\t\t\t\t\t\t<i class=\"pi pi-user\"></i>\r\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Username\"/>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<span class=\"p-input-icon-right\">\r\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Search\"/>\r\n\t\t\t\t\t\t<i class=\"pi pi-search\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<span class=\"p-input-icon-left p-input-icon-right\">\r\n\t\t\t\t\t\t<i class=\"pi pi-user\"></i>\r\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Search\"/>\r\n\t\t\t\t\t\t<i class=\"pi pi-search\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h5>Float Label</h5>\r\n\t\t\t<span class=\"p-float-label\">\r\n\t\t\t\t<input id=\"float-input\" type=\"text\" pInputText>\r\n\t\t\t\t<label for=\"float-input\">Username</label>\r\n\t\t\t</span>\r\n\r\n\t\t\t<h5>Textarea</h5>\r\n\t\t\t<textarea rows=\"5\" cols=\"30\" placeholder=\"Your Message\" pInputTextarea></textarea>\r\n\r\n\t\t\t<h5>AutoComplete</h5>\r\n\t\t\t<p-autoComplete [(ngModel)]=\"selectedCountryAdvanced\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\" [dropdown]=\"true\">\r\n\t\t\t</p-autoComplete>\r\n\r\n\t\t\t<h5>Calendar</h5>\r\n\t\t\t<p-calendar [showIcon]=\"true\" inputId=\"icon\"></p-calendar>\r\n\r\n\t\t\t<h5>InputNumber</h5>\r\n\t\t\t<p-inputNumber mode=\"decimal\" [showButtons]=\"true\" [min]=\"0\" [max]=\"100\">\r\n\t\t\t</p-inputNumber>\r\n\r\n\t\t\t<h5>Chips</h5>\r\n\t\t\t<p-chips></p-chips>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"p-grid\">\r\n\t\t\t\t<div class=\"p-col-12\">\r\n\t\t\t\t\t<h5>Slider</h5>\r\n\t\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"valSlider\" readonly/>\r\n\t\t\t\t\t<p-slider [(ngModel)]=\"valSlider\"></p-slider>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-6\">\r\n\t\t\t\t\t<h5>Rating</h5>\r\n\t\t\t\t\t<p-rating></p-rating>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-6\">\r\n\t\t\t\t\t<h5>ColorPicker</h5>\r\n\t\t\t\t\t<p-colorPicker [(ngModel)]=\"valColor\"></p-colorPicker>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12\">\r\n\t\t\t\t\t<h5>Knob</h5>\r\n\t\t\t\t\t<p-knob [(ngModel)]=\"valueKnob\" valueTemplate=\"{value}%\" [step]=\"10\" [min]=\"-50\" [max]=\"50\"></p-knob>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>RadioButton</h5>\r\n\t\t\t<div class=\"p-grid\">\r\n\t\t\t\t<div class=\"p-col-12 p-md-4\">\r\n\t\t\t\t\t<div class=\"p-field-radiobutton\">\r\n\t\t\t\t\t\t<p-radioButton name=\"city\" value=\"Chicago\" [(ngModel)]=\"valRadio\" id=\"city1\"></p-radioButton>\r\n\t\t\t\t\t\t<label for=\"city1\">Chicago</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-4\">\r\n\t\t\t\t\t<div class=\"p-field-radiobutton\">\r\n\t\t\t\t\t\t<p-radioButton name=\"city\" value=\"Los Angeles\" [(ngModel)]=\"valRadio\"\r\n\t\t\t\t\t\t\t\t\t   id=\"city2\"></p-radioButton>\r\n\t\t\t\t\t\t<label for=\"city2\">Los Angeles</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-4\">\r\n\t\t\t\t\t<div class=\"p-field-radiobutton\">\r\n\t\t\t\t\t\t<p-radioButton name=\"city\" value=\"New York\" [(ngModel)]=\"valRadio\" id=\"city3\"></p-radioButton>\r\n\t\t\t\t\t\t<label for=\"city3\">New York</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h5>Checkbox</h5>\r\n\t\t\t<div class=\"p-grid\">\r\n\t\t\t\t<div class=\"p-col-12 p-md-4\">\r\n\t\t\t\t\t<div class=\"p-field-checkbox\">\r\n\t\t\t\t\t\t<p-checkbox name=\"group1\" value=\"New York\" [(ngModel)]=\"valCheck\" id=\"ny\"></p-checkbox>\r\n\t\t\t\t\t\t<label for=\"ny\">New York</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-4\">\r\n\t\t\t\t\t<div class=\"p-field-checkbox\">\r\n\t\t\t\t\t\t<p-checkbox name=\"group1\" value=\"San Francisco\" [(ngModel)]=\"valCheck\" id=\"sf\"></p-checkbox>\r\n\t\t\t\t\t\t<label for=\"sf\">San Francisco</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-4\">\r\n\t\t\t\t\t<div class=\"p-field-checkbox\">\r\n\t\t\t\t\t\t<p-checkbox name=\"group1\" value=\"Los Angeles\" [(ngModel)]=\"valCheck\" id=\"la\"></p-checkbox>\r\n\t\t\t\t\t\t<label for=\"la\">Los Angeles</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h5>Input Switch</h5>\r\n\t\t\t<p-inputSwitch [(ngModel)]=\"valSwitch\"></p-inputSwitch>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card p-fluid\">\r\n\t\t\t<h5>Listbox</h5>\r\n\t\t\t<p-listbox [options]=\"cities\" [(ngModel)]=\"selectedList\" [filter]=\"true\"></p-listbox>\r\n\r\n\t\t\t<h5>Dropdown</h5>\r\n\t\t\t<p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedDrop\" placeholder=\"Select a City\" [showClear]=\"true\"></p-dropdown>\r\n\r\n\t\t\t<h5>Multiselect</h5>\r\n\t\t\t<p-multiSelect [options]=\"countries\" [(ngModel)]=\"selectedMulti\" defaultLabel=\"Select a Country\" optionLabel=\"name\" class=\"multiselect-custom\">\r\n\t\t\t\t<ng-template let-value pTemplate=\"selectedItems\">\r\n\t\t\t\t\t<div class=\"country-item country-item-value\" *ngFor=\"let option of selectedMulti\">\r\n\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\" [class]=\"'flag flag-' + option.code.toLowerCase()\" />\r\n\t\t\t\t\t\t<div>{{option.name}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"!selectedMulti || selectedMulti.length === 0\" class=\"country-placeholder\">\r\n\t\t\t\t\t\tSelect Countries\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-country pTemplate=\"item\">\r\n\t\t\t\t\t<div class=\"country-item\">\r\n\t\t\t\t\t\t<img src=\"assets/demo/flags/flag_placeholder.png\" [class]=\"'flag flag-' + country.code.toLowerCase()\" />\r\n\t\t\t\t\t\t<div>{{country.name}}</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-multiSelect>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>ToggleButton</h5>\r\n\t\t\t<p-toggleButton [(ngModel)]=\"valToggle\" onLabel=\"Yes\" offLabel=\"No\" [style]=\"{'width': '10em'}\"></p-toggleButton>\r\n\r\n\t\t\t<h5>SelectOneButton</h5>\r\n\t\t\t<p-selectButton [options]=\"paymentOptions\" [(ngModel)]=\"valSelect1\" multiple=\"multiple\" optionLabel=\"name\"></p-selectButton>\r\n\r\n\t\t\t<h5>SelectManyButton</h5>\r\n\t\t\t<p-selectButton [options]=\"paymentOptions\" [(ngModel)]=\"valSelect2\" multiple=\"multiple\" optionLabel=\"name\"></p-selectButton>\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>InputGroup</h5>\r\n\t\t\t<div class=\"p-grid p-fluid\">\r\n\t\t\t\t<div class=\"p-col-12 p-md-6\">\r\n\t\t\t\t\t<div class=\"p-inputgroup\">\r\n\t\t\t\t\t\t<span class=\"p-inputgroup-addon\"><i class=\"pi pi-user\"></i></span>\r\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Username\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-6\">\r\n\t\t\t\t\t<div class=\"p-inputgroup\">\r\n\t\t\t\t\t\t<span class=\"p-inputgroup-addon\"><i class=\"pi pi-tags\" style=\"line-height: 1.25;\"></i></span>\r\n\t\t\t\t\t\t<span class=\"p-inputgroup-addon\"><i class=\"pi pi-shopping-cart\" style=\"line-height: 1.25;\"></i></span>\r\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Price\">\r\n\t\t\t\t\t\t<span class=\"p-inputgroup-addon\">$</span>\r\n\t\t\t\t\t\t<span class=\"p-inputgroup-addon\">.00</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-6\">\r\n\t\t\t\t\t<div class=\"p-inputgroup\">\r\n\t\t\t\t\t\t<button type=\"button\" pButton pRipple label=\"Search\"></button>\r\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Keyword\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-md-6\">\r\n\t\t\t\t\t<div class=\"p-inputgroup\">\r\n\t\t\t\t\t\t<span class=\"p-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n\t\t\t\t\t\t<input type=\"text\" pInputText placeholder=\"Username\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n";
      /***/
    },

    /***/
    "E0JW":
    /*!********************************************!*\
      !*** ./src/app/pages/quizz/tabledemo.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function E0JW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep {\n  /* Responsive */\n}\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers:not(.p-datatable-gridlines) .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n:host ::ng-deep .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n.customer-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.customer-badge.status-qualified {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.product-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.order-badge.order-delivered {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned {\n  background: #ECCFFF;\n  color: #694382;\n}\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--surface-d);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Inter\", sans-serif;\n  color: rgba(58, 18, 7, 0.9209411765);\n  font-size: calc(1em + 1.25vw);\n  background-color: rgba(15, 5, 2, 0.9780392157);\n}\nform {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\nlabel {\n  display: flex;\n  cursor: pointer;\n  font-weight: 500;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 0.375em;\n  /* Accessible outline */\n  /* Remove comment to use */\n  /*\n  \t&:focus-within {\n  \t\t\toutline: .125em solid $primary-color;\n  \t}\n  */\n}\nlabel .questions {\n  position: absolute;\n  left: -9999px;\n}\nlabel .questions:checked + span {\n  background-color: rgba(39, 23, 18, 0.9648627451);\n}\nlabel .questions:checked + span:before {\n  box-shadow: inset 0 0 0 0.4375em #db451cc7;\n}\nlabel span {\n  display: flex;\n  align-items: center;\n  padding: 0.375em 0.75em 0.375em 0.375em;\n  border-radius: 15px;\n  transition: 0.25s ease;\n}\nlabel span:hover {\n  background-color: rgba(43, 25, 21, 0.9648627451);\n}\nlabel span:before {\n  display: flex;\n  flex-shrink: 0;\n  content: \"\";\n  background-color: #0d0c0c;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  margin-right: 0.375em;\n  transition: 0.25s ease;\n  box-shadow: inset 0 0 0 0.125em #db451cc7;\n}\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXVEQyxlQUFBO0FBckREO0FBQUU7RUFDQyxpQkFBQTtBQUVIO0FBRUM7RUFDQyxjQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0MseUJBQUE7QUFBSDtBQUlDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBRkY7QUFLQztFQUNDLGdCQUFBO0FBSEY7QUFLRTtFQUNDLGdCQUFBO0FBSEg7QUFRRTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTkg7QUFTRTtFQUNDLGFBQUE7QUFQSDtBQVVFO0VBQ0MsZ0JBQUE7QUFSSDtBQVdFO0VBQ0MseUJBQUE7QUFUSDtBQWNFO0VBQ0MsWUFBQTtBQVpIO0FBaUJDO0VBQ0MsYUFBQTtBQWZGO0FBbUJBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFoQkQ7QUFrQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFoQkY7QUFtQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFqQkY7QUFvQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFsQkY7QUFxQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFuQkY7QUFzQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFwQkY7QUF1QkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFyQkY7QUF5QkE7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXRCRDtBQXdCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXRCRjtBQXlCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXZCRjtBQTBCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXhCRjtBQTRCQTtFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBekJEO0FBMkJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBekJGO0FBNEJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBMUJGO0FBNkJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBM0JGO0FBOEJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBNUJGO0FBZ0NBO0VBS0k7O0lBRUMsd0JBQUE7RUFqQ0g7RUFvQ0U7SUFDQyx5Q0FBQTtFQWxDSDtFQW9DRztJQUNDLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFsQ0o7RUFvQ0k7SUFDQyxlQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0NBQUE7SUFDQSxpQkFBQTtFQWxDTDtFQXFDSTtJQUNDLGtCQUFBO0VBbkNMO0FBQ0Y7QUE0Q0E7OztFQUdDLHNCQUFBO0FBMUNEO0FBZ0RBO0VBQ0MsZ0NBQUE7RUFDQSxvQ0FKWTtFQUtaLDZCQUFBO0VBQ0EsOENBQUE7QUE3Q0Q7QUFnREE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBN0NEO0FBZ0RBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUVBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQTs7OztHQUFBO0FBMUNEO0FBK0NDO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0FBN0NGO0FBK0NFO0VBQ0MsZ0RBQUE7QUE3Q0g7QUErQ0c7RUFDQywwQ0FBQTtBQTdDSjtBQWtEQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWhERjtBQWtERTtFQUNDLGdEQUFBO0FBaERIO0FBbURFO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FBakRIO0FBdURBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXBERCIsImZpbGUiOiJ0YWJsZWRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcblx0LnAtcGFnaW5hdG9yIHtcclxuXHRcdC5wLXBhZ2luYXRvci1jdXJyZW50IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQucC1wcm9ncmVzc2JhciB7XHJcblx0XHRoZWlnaHQ6IC41cmVtO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q4REFEQztcclxuXHJcblx0XHQucC1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQudGFibGUtaGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHtcclxuXHRcdG1pbi13aWR0aDogMjVyZW07XHJcblxyXG5cdFx0dGQge1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyB7XHJcblx0XHQucC1kYXRhdGFibGUtaGVhZGVyIHtcclxuXHRcdFx0cGFkZGluZzogMXJlbTtcclxuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LnAtcGFnaW5hdG9yIHtcclxuXHRcdFx0cGFkZGluZzogMXJlbTtcclxuXHRcdH1cclxuXHJcblx0XHQucC1kYXRhdGFibGUtdGhlYWQ+dHI+dGgge1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5wLWRyb3Bkb3duLWxhYmVsOm5vdCgucC1wbGFjZWhvbGRlcikge1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVyczpub3QoLnAtZGF0YXRhYmxlLWdyaWRsaW5lcykge1xyXG5cdFx0LnAtZGF0YXRhYmxlLXRib2R5PnRyPnRkIHtcclxuXHRcdFx0Y3Vyc29yOiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogUmVzcG9uc2l2ZSAqL1xyXG5cdC5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5PnRyPnRkIC5wLWNvbHVtbi10aXRsZSB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuLmN1c3RvbWVyLWJhZGdlIHtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0cGFkZGluZzogLjI1ZW0gLjVyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcblx0Ji5zdGF0dXMtcXVhbGlmaWVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNDOEU2Qzk7XHJcblx0XHRjb2xvcjogIzI1NjAyOTtcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLXVucXVhbGlmaWVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkNERDI7XHJcblx0XHRjb2xvcjogI0M2MzczNztcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLW5lZ290aWF0aW9uIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRUVEQUY7XHJcblx0XHRjb2xvcjogIzhBNTM0MDtcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLW5ldyB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjQjNFNUZDO1xyXG5cdFx0Y29sb3I6ICMyMzU0N0I7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1yZW5ld2FsIHtcclxuXHRcdGJhY2tncm91bmQ6ICNFQ0NGRkY7XHJcblx0XHRjb2xvcjogIzY5NDM4MjtcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLXByb3Bvc2FsIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkQ4QjI7XHJcblx0XHRjb2xvcjogIzgwNUIzNjtcclxuXHR9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWJhZGdlIHtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0cGFkZGluZzogLjI1ZW0gLjVyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcblx0Ji5zdGF0dXMtaW5zdG9jayB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjQzhFNkM5O1xyXG5cdFx0Y29sb3I6ICMyNTYwMjk7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1vdXRvZnN0b2NrIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkNERDI7XHJcblx0XHRjb2xvcjogI0M2MzczNztcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLWxvd3N0b2NrIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRUVEQUY7XHJcblx0XHRjb2xvcjogIzhBNTM0MDtcclxuXHR9XHJcbn1cclxuXHJcbi5vcmRlci1iYWRnZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdHBhZGRpbmc6IC4yNWVtIC41cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcblxyXG5cdCYub3JkZXItZGVsaXZlcmVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNDOEU2Qzk7XHJcblx0XHRjb2xvcjogIzI1NjAyOTtcclxuXHR9XHJcblxyXG5cdCYub3JkZXItY2FuY2VsbGVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkNERDI7XHJcblx0XHRjb2xvcjogI0M2MzczNztcclxuXHR9XHJcblxyXG5cdCYub3JkZXItcGVuZGluZyB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkVFREFGO1xyXG5cdFx0Y29sb3I6ICM4QTUzNDA7XHJcblx0fVxyXG5cclxuXHQmLm9yZGVyLXJldHVybmVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNFQ0NGRkY7XHJcblx0XHRjb2xvcjogIzY5NDM4MjtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcblx0Omhvc3QgOjpuZy1kZWVwIHtcclxuXHRcdC5wLWRhdGF0YWJsZSB7XHJcblx0XHRcdCYucC1kYXRhdGFibGUtY3VzdG9tZXJzIHtcclxuXHJcblx0XHRcdFx0LnAtZGF0YXRhYmxlLXRoZWFkPnRyPnRoLFxyXG5cdFx0XHRcdC5wLWRhdGF0YWJsZS10Zm9vdD50cj50ZCB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQucC1kYXRhdGFibGUtdGJvZHk+dHIge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcblxyXG5cdFx0XHRcdFx0PnRkIHtcclxuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogMCBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRjbGVhcjogbGVmdDtcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiAwIG5vbmU7XHJcblxyXG5cdFx0XHRcdFx0XHQucC1jb2x1bW4tdGl0bGUge1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IC40cmVtO1xyXG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogMzAlO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW46IC0uNHJlbSAxcmVtIC0uNHJlbSAtLjRyZW07XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5wLXByb2dyZXNzYmFyIHtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAuNXJlbTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuXHJcbiosXHJcbio6YWZ0ZXIsXHJcbio6YmVmb3JlIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogI2RiNDUxY2M3OyAvLyBDaGFuZ2UgY29sb3IgaGVyZS4gQydtb24sIHRyeSBpdCEgXHJcbiR0ZXh0LWNvbG9yOiBtaXgoIzAwMCwgJHByaW1hcnktY29sb3IsIDY0JSk7XHJcblxyXG5ib2R5IHtcclxuXHRmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG5cdGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuXHRmb250LXNpemU6IGNhbGMoMWVtICsgMS4yNXZ3KTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBtaXgocmdiKDAsIDAsIDApLCAkcHJpbWFyeS1jb2xvciwgOTAlKTtcclxufVxyXG5cclxuZm9ybSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubGFiZWwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0bWFyZ2luLWJvdHRvbTogMC4zNzVlbTtcclxuXHJcblx0LyogQWNjZXNzaWJsZSBvdXRsaW5lICovXHJcblx0LyogUmVtb3ZlIGNvbW1lbnQgdG8gdXNlICovXHJcblx0LypcclxuXHRcdCY6Zm9jdXMtd2l0aGluIHtcclxuXHRcdFx0XHRvdXRsaW5lOiAuMTI1ZW0gc29saWQgJHByaW1hcnktY29sb3I7XHJcblx0XHR9XHJcblx0Ki9cclxuXHQucXVlc3Rpb25zIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IC05OTk5cHg7XHJcblxyXG5cdFx0JjpjaGVja2VkK3NwYW4ge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBtaXgocmdiKDE3LCAxNywgMTcpLCAkcHJpbWFyeS1jb2xvciwgODQlKTtcclxuXHJcblx0XHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0XHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwLjQzNzVlbSAkcHJpbWFyeS1jb2xvcjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3BhbiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDAuMzc1ZW0gMC43NWVtIDAuMzc1ZW0gMC4zNzVlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7IC8vIG9yIHNvbWV0aGluZyBoaWdoZXIuLi5cclxuXHRcdHRyYW5zaXRpb246IDAuMjVzIGVhc2U7XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IG1peChyZ2IoMjIsIDIwLCAyMCksICRwcmltYXJ5LWNvbG9yLCA4NCUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1zaHJpbms6IDA7XHJcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigxMywgMTIsIDEyKTtcclxuXHRcdFx0d2lkdGg6IDEuNWVtO1xyXG5cdFx0XHRoZWlnaHQ6IDEuNWVtO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMC4zNzVlbTtcclxuXHRcdFx0dHJhbnNpdGlvbjogMC4yNXMgZWFzZTtcclxuXHRcdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMC4xMjVlbSAkcHJpbWFyeS1jb2xvcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIENvZGVwZW4gc3Blc2lmaWMgc3R5bGluZyAtIG9ubHkgdG8gY2VudGVyIHRoZSBlbGVtZW50cyBpbiB0aGUgcGVuIHByZXZpZXcgYW5kIHZpZXdwb3J0XHJcbi5jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8vIEVuZCBDb2RlcGVuIHNwZXNpZmljIHN0eWxpbmciXX0= */";
      /***/
    },

    /***/
    "GKnm":
    /*!************************************************!*\
      !*** ./src/app/pages/app.invoice.component.ts ***!
      \************************************************/

    /*! exports provided: AppInvoiceComponent */

    /***/
    function GKnm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInvoiceComponent", function () {
        return AppInvoiceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.invoice.component.html */
      "vGzH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var AppInvoiceComponent = /*#__PURE__*/function () {
        function AppInvoiceComponent(breadcrumbService, app) {
          _classCallCheck(this, AppInvoiceComponent);

          this.breadcrumbService = breadcrumbService;
          this.app = app;
          this.breadcrumbService.setItems([{
            label: 'Pages'
          }, {
            label: 'Invoice',
            routerLink: ['/pages/invoice']
          }]);
        }

        _createClass(AppInvoiceComponent, [{
          key: "print",
          value: function print() {
            window.print();
          }
        }]);

        return AppInvoiceComponent;
      }();

      AppInvoiceComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }];
      };

      AppInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_app_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppInvoiceComponent);
      /***/
    },

    /***/
    "GlPy":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/overlaysdemo.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function GlPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h5>Dialog</h5>\r\n            <p-dialog header=\"Dialog\" [(visible)]=\"display\" modal=\"modal\" showEffect=\"fade\" [style]=\"{width: '400px'}\">\r\n                <div style=\"line-height: 1.5\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\r\n                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r\n                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n                </div>\r\n                <p-footer>\r\n                    <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\" class=\"p-button-text\"></button>\r\n                    <button type=\"button\" pButton icon=\"pi pi-times\" (click)=\"display=false\" label=\"No\" class=\"p-button-text\"></button>\r\n                </p-footer>\r\n            </p-dialog>\r\n\r\n            <button type=\"text\" (click)=\"display=true\" pButton icon=\"pi pi-external-link\" label=\"Show\" style=\"width: auto\"></button>\r\n        </div>\r\n\r\n        <div class=\"card p-fluid\">\r\n            <h5>Overlay Panel</h5>\r\n            <div class=\"p-grid\">\r\n                <div class=\"p-col-6\">\r\n                    <button type=\"button\" pButton label=\"Image\" (click)=\"op1.toggle($event)\" class=\"p-button-success\"></button>\r\n                    <p-overlayPanel #op1>\r\n                        <img src=\"assets/demo/images/nature/nature1.jpg\" alt=\"Nature 1\" />\r\n                    </p-overlayPanel>\r\n                </div>\r\n                <div class=\"p-col-6\">\r\n                    <button type=\"button\" pButton label=\"DataTable\" (click)=\"op2.toggle($event)\" class=\"p-button-success\"></button>\r\n                    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [style]=\"{width: '450px'}\">\r\n                        <ng-template pTemplate>\r\n                            <p-table [value]=\"products\" selectionMode=\"single\" [(selection)]=\"selectedProduct\" [paginator]=\"true\" [rows]=\"5\" (onRowSelect)=\"op2.hide()\">\r\n                                <ng-template pTemplate=\"header\">\r\n                                    <tr>\r\n                                        <th pSortableColumn=\"name\">Name<p-sortIcon field=\"name\"></p-sortIcon></th>\r\n                                        <th>Image</th>\r\n                                        <th pSortableColumn=\"price\">Price <p-sortIcon field=\"price\"></p-sortIcon></th>\r\n                                    </tr>\r\n                                </ng-template>\r\n                                <ng-template pTemplate=\"body\" let-rowData let-product>\r\n                                    <tr [pSelectableRow]=\"rowData\">\r\n                                        <td>{{product.name}}</td>\r\n                                        <td><img src=\"assets/demo/images/product/{{product.image}}\" [alt]=\"product.image\" class=\"product-image\" /></td>\r\n                                        <td>{{product.price}}</td>\r\n                                    </tr>\r\n                                </ng-template>\r\n                            </p-table>\r\n                        </ng-template>\r\n                    </p-overlayPanel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-lg-6\">\r\n\r\n        <div class=\"card\">\r\n            <h5>Confirmation</h5>\r\n            <p-confirmDialog header=\"Confirmation\" key=\"confirm1\" icon=\"pi pi-exclamation-triangle\" message=\"Are you sure you want to proceed?\"\r\n                             [style]=\"{width: '425px'}\" acceptButtonStyleClass=\"p-button-text\" rejectButtonStyleClass=\"p-button-text\"></p-confirmDialog>\r\n\r\n            <button type=\"text\" (click)=\"confirm1()\" pButton icon=\"pi pi-trash\" label=\"Delete\" class=\"p-button-danger\" style=\"width: auto\"></button>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5>Sidebar</h5>\r\n            <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\">\r\n                <h3 style=\"font-weight:normal\">Left Sidebar</h3>\r\n            </p-sidebar>\r\n\r\n            <p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\">\r\n                <h3 style=\"font-weight:normal\">Right Sidebar</h3>\r\n            </p-sidebar>\r\n\r\n            <p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\">\r\n                <h3 style=\"font-weight:normal\">Top Sidebar</h3>\r\n            </p-sidebar>\r\n\r\n            <p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\">\r\n                <h3 style=\"font-weight:normal\">Bottom Sidebar</h3>\r\n            </p-sidebar>\r\n\r\n            <p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">\r\n                <h3 style=\"font-weight:normal\">Full Screen Sidebar</h3>\r\n            </p-sidebar>\r\n\r\n            <button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"pi pi-arrow-right\" class=\"p-button-warning\"></button>\r\n            <button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"pi pi-arrow-left\" class=\"p-button-warning\"></button>\r\n            <button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"pi pi-arrow-down\" class=\"p-button-warning\"></button>\r\n            <button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"pi pi-arrow-up\" class=\"p-button-warning\"></button>\r\n            <button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"pi pi-th-large\" class=\"p-button-warning\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h5>Tooltip</h5>\r\n            <div class=\"p-formgroup-inline\">\r\n                <div class=\"p-field\">\r\n                    <label for=\"firstname5\" class=\"p-sr-only\">Username</label>\r\n                    <input id=\"firstname5\" type=\"text\" pInputText placeholder=\"Username\" pTooltip=\"Enter your username\">\r\n                </div>\r\n                <button pButton pRipple type=\"button\" label=\"Submit\" pTooltip=\"Click to proceed\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h5>ConfirmPopup</h5>\r\n\r\n            <p-toast></p-toast>\r\n            <button (click)=\"confirm2($event)\" pButton icon=\"pi pi-check\" label=\"Confirm\"></button>\r\n            <p-confirmPopup key=\"confirm2\"></p-confirmPopup>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "H1jX":
    /*!**************************************!*\
      !*** ./src/app/utilities/icons.scss ***!
      \**************************************/

    /*! exports provided: default */

    /***/
    function H1jX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".icon-filter {\n  width: 100%;\n  padding: 1rem;\n  margin: 1rem 0 1.5rem 0;\n}\n\n.icons-list {\n  text-align: center;\n}\n\n.icons-list i {\n  font-size: 1.5rem;\n  color: var(--text-color-secondary);\n  margin-bottom: 0.5rem;\n}\n\n.icons-list .p-md-2 {\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGljb25zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQkFBQTtBQUNEOztBQUNDO0VBQ0MsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUM7RUFDQyxvQkFBQTtBQUFGIiwiZmlsZSI6Imljb25zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1maWx0ZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDFyZW07XHJcblx0bWFyZ2luOiAxcmVtIDAgMS41cmVtIDA7XHJcbn1cclxuXHJcbi5pY29ucy1saXN0IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cdGkge1xyXG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogLjVyZW07XHJcblx0fVxyXG5cclxuXHQucC1tZC0yIHtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG5cdH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "HRNH":
    /*!**************************************!*\
      !*** ./src/app/pages/home/home.scss ***!
      \**************************************/

    /*! exports provided: default */

    /***/
    function HRNH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep {\n  /* Responsive */\n}\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers:not(.p-datatable-gridlines) .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n:host ::ng-deep .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n.customer-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.customer-badge.status-qualified {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.product-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.order-badge.order-delivered {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned {\n  background: #ECCFFF;\n  color: #694382;\n}\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--surface-d);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUF1REMsZUFBQTtBQXJERDtBQUFFO0VBQ0MsaUJBQUE7QUFFSDtBQUVDO0VBQ0MsY0FBQTtFQUNBLHlCQUFBO0FBQUY7QUFFRTtFQUNDLHlCQUFBO0FBQUg7QUFJQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtBQUZGO0FBS0M7RUFDQyxnQkFBQTtBQUhGO0FBS0U7RUFDQyxnQkFBQTtBQUhIO0FBUUU7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5IO0FBU0U7RUFDQyxhQUFBO0FBUEg7QUFVRTtFQUNDLGdCQUFBO0FBUkg7QUFXRTtFQUNDLHlCQUFBO0FBVEg7QUFjRTtFQUNDLFlBQUE7QUFaSDtBQWlCQztFQUNDLGFBQUE7QUFmRjtBQW1CQTtFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBaEJEO0FBa0JDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBaEJGO0FBbUJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBakJGO0FBb0JDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBbEJGO0FBcUJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBbkJGO0FBc0JDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBcEJGO0FBdUJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBckJGO0FBeUJBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUF0QkQ7QUF3QkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUF0QkY7QUF5QkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUF2QkY7QUEwQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUF4QkY7QUE0QkE7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXpCRDtBQTJCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXpCRjtBQTRCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQTFCRjtBQTZCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQTNCRjtBQThCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQTVCRjtBQWdDQTtFQUlJOztJQUVDLHdCQUFBO0VBaENIO0VBbUNFO0lBQ0MseUNBQUE7RUFqQ0g7RUFtQ0c7SUFDQyxnQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBakNKO0VBbUNJO0lBQ0MsZUFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLG9DQUFBO0lBQ0EsaUJBQUE7RUFqQ0w7RUFvQ0k7SUFDQyxrQkFBQTtFQWxDTDtBQUNGIiwiZmlsZSI6ImhvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCB7XHJcblx0LnAtcGFnaW5hdG9yIHtcclxuXHRcdC5wLXBhZ2luYXRvci1jdXJyZW50IHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQucC1wcm9ncmVzc2JhciB7XHJcblx0XHRoZWlnaHQ6IC41cmVtO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Q4REFEQztcclxuXHJcblx0XHQucC1wcm9ncmVzc2Jhci12YWx1ZSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQudGFibGUtaGVhZGVyIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0fVxyXG5cclxuXHQucC1jYWxlbmRhciAucC1kYXRlcGlja2VyIHtcclxuXHRcdG1pbi13aWR0aDogMjVyZW07XHJcblxyXG5cdFx0dGQge1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnAtZGF0YXRhYmxlLnAtZGF0YXRhYmxlLWN1c3RvbWVycyB7XHJcblx0XHQucC1kYXRhdGFibGUtaGVhZGVyIHtcclxuXHRcdFx0cGFkZGluZzogMXJlbTtcclxuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjVyZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LnAtcGFnaW5hdG9yIHtcclxuXHRcdFx0cGFkZGluZzogMXJlbTtcclxuXHRcdH1cclxuXHJcblx0XHQucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcclxuXHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdH1cclxuXHJcblx0XHQucC1kcm9wZG93bi1sYWJlbDpub3QoLnAtcGxhY2Vob2xkZXIpIHtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnM6bm90KC5wLWRhdGF0YWJsZS1ncmlkbGluZXMpIHtcclxuXHRcdC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyID4gdGQge1xyXG5cdFx0XHRjdXJzb3I6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiBSZXNwb25zaXZlICovXHJcblx0LnAtZGF0YXRhYmxlLWN1c3RvbWVycyAucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIC5wLWNvbHVtbi10aXRsZSB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuLmN1c3RvbWVyLWJhZGdlIHtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0cGFkZGluZzogLjI1ZW0gLjVyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcblx0Ji5zdGF0dXMtcXVhbGlmaWVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNDOEU2Qzk7XHJcblx0XHRjb2xvcjogIzI1NjAyOTtcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLXVucXVhbGlmaWVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkNERDI7XHJcblx0XHRjb2xvcjogI0M2MzczNztcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLW5lZ290aWF0aW9uIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRUVEQUY7XHJcblx0XHRjb2xvcjogIzhBNTM0MDtcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLW5ldyB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjQjNFNUZDO1xyXG5cdFx0Y29sb3I6ICMyMzU0N0I7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1yZW5ld2FsIHtcclxuXHRcdGJhY2tncm91bmQ6ICNFQ0NGRkY7XHJcblx0XHRjb2xvcjogIzY5NDM4MjtcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLXByb3Bvc2FsIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkQ4QjI7XHJcblx0XHRjb2xvcjogIzgwNUIzNjtcclxuXHR9XHJcbn1cclxuXHJcbi5wcm9kdWN0LWJhZGdlIHtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0cGFkZGluZzogLjI1ZW0gLjVyZW07XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRsZXR0ZXItc3BhY2luZzogLjNweDtcclxuXHJcblx0Ji5zdGF0dXMtaW5zdG9jayB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjQzhFNkM5O1xyXG5cdFx0Y29sb3I6ICMyNTYwMjk7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1vdXRvZnN0b2NrIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkNERDI7XHJcblx0XHRjb2xvcjogI0M2MzczNztcclxuXHR9XHJcblxyXG5cdCYuc3RhdHVzLWxvd3N0b2NrIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRUVEQUY7XHJcblx0XHRjb2xvcjogIzhBNTM0MDtcclxuXHR9XHJcbn1cclxuXHJcbi5vcmRlci1iYWRnZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdHBhZGRpbmc6IC4yNWVtIC41cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcblxyXG5cdCYub3JkZXItZGVsaXZlcmVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNDOEU2Qzk7XHJcblx0XHRjb2xvcjogIzI1NjAyOTtcclxuXHR9XHJcblxyXG5cdCYub3JkZXItY2FuY2VsbGVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkNERDI7XHJcblx0XHRjb2xvcjogI0M2MzczNztcclxuXHR9XHJcblxyXG5cdCYub3JkZXItcGVuZGluZyB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkVFREFGO1xyXG5cdFx0Y29sb3I6ICM4QTUzNDA7XHJcblx0fVxyXG5cclxuXHQmLm9yZGVyLXJldHVybmVkIHtcclxuXHRcdGJhY2tncm91bmQ6ICNFQ0NGRkY7XHJcblx0XHRjb2xvcjogIzY5NDM4MjtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcblx0Omhvc3QgOjpuZy1kZWVwIHtcclxuXHRcdC5wLWRhdGF0YWJsZSB7XHJcblx0XHRcdCYucC1kYXRhdGFibGUtY3VzdG9tZXJzIHtcclxuXHRcdFx0XHQucC1kYXRhdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxyXG5cdFx0XHRcdC5wLWRhdGF0YWJsZS10Zm9vdCA+IHRyID4gdGQge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LnAtZGF0YXRhYmxlLXRib2R5ID4gdHIge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcblxyXG5cdFx0XHRcdFx0PiB0ZCB7XHJcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHRcdFx0Y2xlYXI6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogMCBub25lO1xyXG5cclxuXHRcdFx0XHRcdFx0LnAtY29sdW1uLXRpdGxlIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAuNHJlbTtcclxuXHRcdFx0XHRcdFx0XHRtaW4td2lkdGg6IDMwJTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAtLjRyZW0gMXJlbSAtLjRyZW0gLS40cmVtO1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQucC1wcm9ncmVzc2JhciB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogLjVyZW07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Hf0O":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/tabledemo.component.ts ***!
      \**************************************************/

    /*! exports provided: TableDemoComponent */

    /***/
    function Hf0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableDemoComponent", function () {
        return TableDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tabledemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tabledemo.component.html */
      "4U8t");
      /* harmony import */


      var _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabledemo.scss */
      "MBEb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_customerservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/customerservice */
      "04hL");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");

      var TableDemoComponent = /*#__PURE__*/function () {
        function TableDemoComponent(customerService, productService, breadcrumbService) {
          _classCallCheck(this, TableDemoComponent);

          this.customerService = customerService;
          this.productService = productService;
          this.breadcrumbService = breadcrumbService;
          this.activityValues = [0, 100];
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Table',
            routerLink: ['/uikit/table']
          }]);
        }

        _createClass(TableDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.customerService.getCustomersLarge().then(function (customers) {
              _this9.customers1 = customers; // @ts-ignore

              _this9.customers1.forEach(function (customer) {
                return customer.date = new Date(customer.date);
              });
            });
            this.customerService.getCustomersMedium().then(function (customers) {
              return _this9.customers2 = customers;
            });
            this.customerService.getCustomersMedium().then(function (customers) {
              return _this9.customers3 = customers;
            });
            this.productService.getProductsWithOrdersSmall().then(function (data) {
              return _this9.products = data;
            });
            this.representatives = [{
              name: 'Amy Elsner',
              image: 'amyelsner.png'
            }, {
              name: 'Anna Fali',
              image: 'annafali.png'
            }, {
              name: 'Asiya Javayant',
              image: 'asiyajavayant.png'
            }, {
              name: 'Bernardo Dominic',
              image: 'bernardodominic.png'
            }, {
              name: 'Elwin Sharvill',
              image: 'elwinsharvill.png'
            }, {
              name: 'Ioni Bowcher',
              image: 'ionibowcher.png'
            }, {
              name: 'Ivan Magalhaes',
              image: 'ivanmagalhaes.png'
            }, {
              name: 'Onyama Limba',
              image: 'onyamalimba.png'
            }, {
              name: 'Stephen Shaw',
              image: 'stephenshaw.png'
            }, {
              name: 'XuXue Feng',
              image: 'xuxuefeng.png'
            }];
            this.statuses = [{
              label: 'Unqualified',
              value: 'unqualified'
            }, {
              label: 'Qualified',
              value: 'qualified'
            }, {
              label: 'New',
              value: 'new'
            }, {
              label: 'Negotiation',
              value: 'negotiation'
            }, {
              label: 'Renewal',
              value: 'renewal'
            }, {
              label: 'Proposal',
              value: 'proposal'
            }];
          }
        }, {
          key: "onSort",
          value: function onSort() {
            this.updateRowGroupMetaData();
          }
        }, {
          key: "updateRowGroupMetaData",
          value: function updateRowGroupMetaData() {
            this.rowGroupMetadata = {};

            if (this.customers3) {
              for (var i = 0; i < this.customers3.length; i++) {
                var rowData = this.customers3[i];
                var representativeName = rowData.representative.name;

                if (i === 0) {
                  this.rowGroupMetadata[representativeName] = {
                    index: 0,
                    size: 1
                  };
                } else {
                  var previousRowData = this.customers3[i - 1];
                  var previousRowGroup = previousRowData.representative.name;

                  if (representativeName === previousRowGroup) {
                    this.rowGroupMetadata[representativeName].size++;
                  } else {
                    this.rowGroupMetadata[representativeName] = {
                      index: i,
                      size: 1
                    };
                  }
                }
              }
            }
          }
        }]);

        return TableDemoComponent;
      }();

      TableDemoComponent.ctorParameters = function () {
        return [{
          type: _service_customerservice__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]
        }, {
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
        }, {
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["AppBreadcrumbService"]
        }];
      };

      TableDemoComponent.propDecorators = {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['dt']
        }]
      };
      TableDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_tabledemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        @media screen and (max-width: 960px) {\n            :host ::ng-deep .p-datatable.p-datatable-customers.rowexpand-table .p-datatable-tbody > tr > td:nth-child(6) {\n                display: flex;\n            }\n        }\n\n    ", _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TableDemoComponent);
      /***/
    },

    /***/
    "I3un":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/grid.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function I3un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>PrimeFlex grid system is a lightweight flex based responsive layout utility optimized for mobile phones, tablets and\r\n\tdesktops.</h4>\r\n<h5>Basic</h5>\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">3</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Dynamic</h5>\r\n<button pButton pRipple type=\"button\" icon=\"pi pi-plus\" title=\"Add Column\" (click)=\"addColumn()\"\r\n\t\t[disabled]=\"columns.length === 20\" class=\"p-mr-2\"></button>\r\n<button pButton pRipple type=\"button\" icon=\"pi pi-minus\" title=\"Remove Column\" (click)=\"removeColumn()\"\r\n\t\t[disabled]=\"columns.length === 1\"></button>\r\n\r\n<div class=\"p-grid p-mt-2\">\r\n\t<div class=\"p-col\" *ngFor=\"let col of columns; let i=index\" [@animation]=\"'visible'\">\r\n\t\t<div class=\"box\">{{i + 1}}</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Reverse Direction</h5>\r\n<div class=\"p-grid p-dir-rev\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">3</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Column Direction</h5>\r\n<div class=\"p-grid p-dir-col\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">3</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Reverse Column Direction</h5>\r\n<div class=\"p-grid p-dir-col-rev\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">3</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>12 Column Grid</h5>\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-6\">\r\n\t\t<div class=\"box\">6</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-8\">\r\n\t\t<div class=\"box\">8</div>\r\n\t</div>\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>MultiLine</h5>\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-6\">\r\n\t\t<div class=\"box\">6</div>\r\n\t</div>\r\n\t<div class=\"p-col-6\">\r\n\t\t<div class=\"box\">6</div>\r\n\t</div>\r\n\t<div class=\"p-col-6\">\r\n\t\t<div class=\"box\">6</div>\r\n\t</div>\r\n\t<div class=\"p-col-6\">\r\n\t\t<div class=\"box\">6</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Fixed Width Column</h5>\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-fixed\" style=\"width:100px\">\r\n\t\t<div class=\"box\">100px</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">auto</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Responsive</h5>\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\r\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\r\n\t</div>\r\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\r\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\r\n\t</div>\r\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\r\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\r\n\t</div>\r\n\t<div class=\"p-col-12 p-md-6 p-lg-3\">\r\n\t\t<div class=\"box\">p-col-12 p-md-6 p-lg-3</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Horizontal Alignment - Start</h5>\r\n<div class=\"p-grid p-justify-start\">\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-1\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Horizontal Alignment - End</h5>\r\n<div class=\"p-grid p-justify-end\">\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-1\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Horizontal Alignment - Center</h5>\r\n<div class=\"p-grid p-justify-center\">\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-1\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Horizontal Alignment - Between</h5>\r\n<div class=\"p-grid p-justify-between\">\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-1\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Horizontal Alignment - Around</h5>\r\n<div class=\"p-grid p-justify-around\">\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-1\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Horizontal Alignment - Even</h5>\r\n<div class=\"p-grid p-justify-even\">\r\n\t<div class=\"p-col-2\">\r\n\t\t<div class=\"box\">2</div>\r\n\t</div>\r\n\t<div class=\"p-col-1\">\r\n\t\t<div class=\"box\">1</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Vertical Alignment - Start</h5>\r\n<div class=\"p-grid p-align-start vertical-container\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Vertical Alignment - End</h5>\r\n<div class=\"p-grid p-align-end vertical-container\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Vertical Alignment - Center</h5>\r\n<div class=\"p-grid p-align-center vertical-container\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Vertical Alignment - Stretch</h5>\r\n<div class=\"p-grid p-align-stretch vertical-container\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box box-stretched\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box box-stretched\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"box box-stretched\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Vertical Alignment - Per Column</h5>\r\n<div class=\"p-grid vertical-container\">\r\n\t<div class=\"p-col p-col-align-start\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col p-col-align-center\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col p-col-align-end\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Offset</h5>\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-6 p-offset-3\">\r\n\t\t<div class=\"box\">6</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n\t<div class=\"p-col-4 p-offset-4\">\r\n\t\t<div class=\"box\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Nested</h5>\r\n<div class=\"p-grid nested-grid\">\r\n\t<div class=\"p-col-8\">\r\n\t\t<div class=\"p-grid\">\r\n\t\t\t<div class=\"p-col-6\">\r\n\t\t\t\t<div class=\"box\">6</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"p-col-6\">\r\n\t\t\t\t<div class=\"box\">6</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"p-col-12\">\r\n\t\t\t\t<div class=\"box\">12</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"p-col-4\">\r\n\t\t<div class=\"box box-stretched\">4</div>\r\n\t</div>\r\n</div>\r\n\r\n<h5>Panels</h5>\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col\">\r\n\t\t<p-panel header=\"Header\">\r\n\t\t\t<p class=\"p-m-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n\t\t\t\tut labore et dolore magna aliqua.\r\n\t\t\t\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n\t\t\t\tconsequat.\r\n\t\t\t\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n\t\t\t\tExcepteur sint occaecat\r\n\t\t\t\tcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t\t</p-panel>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<p-panel header=\"Header\">\r\n\t\t\t<p class=\"p-m-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n\t\t\t\tut labore et dolore magna aliqua.\r\n\t\t\t\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n\t\t\t\tconsequat.\r\n\t\t\t\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n\t\t\t\tExcepteur sint occaecat\r\n\t\t\t\tcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t\t</p-panel>\r\n\t</div>\r\n\t<div class=\"p-col\">\r\n\t\t<p-panel header=\"Header\">\r\n\t\t\t<p class=\"p-m-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n\t\t\t\tut labore et dolore magna aliqua.\r\n\t\t\t\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n\t\t\t\tconsequat.\r\n\t\t\t\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n\t\t\t\tExcepteur sint occaecat\r\n\t\t\t\tcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n\t\t</p-panel>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ITH+":
    /*!*********************************************!*\
      !*** ./src/app/app.breadcrumb.component.ts ***!
      \*********************************************/

    /*! exports provided: AppBreadcrumbComponent */

    /***/
    function ITH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppBreadcrumbComponent", function () {
        return AppBreadcrumbComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.breadcrumb.component.html */
      "z7Cp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.breadcrumb.service */
      "qVin");

      var AppBreadcrumbComponent = /*#__PURE__*/function () {
        function AppBreadcrumbComponent(breadcrumbService) {
          var _this10 = this;

          _classCallCheck(this, AppBreadcrumbComponent);

          this.breadcrumbService = breadcrumbService;
          this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
            _this10.items = response;
          });
        }

        _createClass(AppBreadcrumbComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }]);

        return AppBreadcrumbComponent;
      }();

      AppBreadcrumbComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      AppBreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-breadcrumb',
        template: _raw_loader_app_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppBreadcrumbComponent);
      /***/
    },

    /***/
    "IzyT":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/mediademo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function IzyT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>Carousel</h5>\r\n            <p-carousel [value]=\"products\" [numVisible]=\"3\" [numScroll]=\"3\" [circular]=\"false\" [responsiveOptions]=\"carouselResponsiveOptions\">\r\n                <ng-template let-product pTemplate=\"item\">\r\n                    <div class=\"product-item\">\r\n                        <div class=\"product-item-content\">\r\n                            <div class=\"p-mb-3\">\r\n                                <img src=\"assets/demo/images/product/{{product.image}}\" [alt]=\"product.name\" class=\"product-image\" />\r\n                            </div>\r\n                            <div>\r\n                                <h4 class=\"p-mb-1\">{{product.name}}</h4>\r\n                                <h6 class=\"p-mt-0 p-mb-3\">${{product.price}}</h6>\r\n                                <span [class]=\"'product-badge status-'+product.inventoryStatus.toLowerCase()\">{{product.inventoryStatus}}</span>\r\n                                <div class=\"car-buttons p-mt-5\">\r\n                                    <p-button type=\"button\" styleClass=\"p-button p-button-rounded p-mr-2\" icon=\"pi pi-search\"></p-button>\r\n                                    <p-button type=\"button\" styleClass=\"p-button-success p-button-rounded p-mr-2\" icon=\"pi pi-star\"></p-button>\r\n                                    <p-button type=\"button\" styleClass=\"p-button-help p-button-rounded\" icon=\"pi pi-cog\"></p-button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </p-carousel>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>Galleria</h5>\r\n            <p-galleria [value]=\"images\" [responsiveOptions]=\"galleriaResponsiveOptions\"\r\n                        [containerStyle]=\"{'max-width': '800px', 'margin':'auto'}\" [numVisible]=\"7\" [circular]=\"true\">\r\n                <ng-template pTemplate=\"item\" let-item>\r\n                    <img [src]=\"item.itemImageSrc\" style=\"width: 100%; display: block;\"/>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"thumbnail\" let-item>\r\n                    <div class=\"p-grid p-nogutter p-justify-center\">\r\n                        <img [src]=\"item.thumbnailImageSrc\" style=\"display: block;\"/>\r\n                    </div>\r\n                </ng-template>\r\n            </p-galleria>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "J7uU":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.help.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function J7uU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid help-page\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card help-search\">\r\n\t\t\t<div class=\"help-search-content\">\r\n\t\t\t\t<h4>We are here to help</h4>\r\n\t\t\t\t<div class=\"search-container\">\r\n\t\t\t\t\t<i class=\"pi pi-search\"></i>\r\n\t\t\t\t\t<input type=\"text\" class=\"p-inputtext\" placeholder=\"Search\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h4>General</h4>\r\n            <p-accordion>\r\n                <p-accordionTab header=\"Header I\" [selected]=\"true\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"Header II\">\r\n                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\r\n                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\r\n                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\r\n                        Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"Header III\">\r\n                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores\r\n                        et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\r\n                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit\r\n                        quo minus.</p>\r\n                </p-accordionTab>\r\n            </p-accordion>\r\n\r\n            <h4>FAQ</h4>\r\n            <p-accordion>\r\n                <p-accordionTab header=\"FAQ I\" [selected]=\"true\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\n                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"FAQ II\">\r\n                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque\r\n                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\r\n                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\r\n                        Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"FAQ III\">\r\n                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores\r\n                        et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.\r\n                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit\r\n                        quo minus.</p>\r\n                </p-accordionTab>\r\n            </p-accordion>\r\n\t\t</div>\r\n\t</div>\r\n\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h4>System Status</h4>\r\n            <p>All services are operational.</p>\r\n            <div class=\"status-bars\">\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar status-bar-failure\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n                <div class=\"status-bar\"></div>\r\n            </div>\r\n            <div class=\"status-bar-footer\">\r\n                <span>30 Days Ago</span>\r\n                <span>Today</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h4>Articles</h4>\r\n            <p>Recent articles from our team.</p>\r\n            <div class=\"blog-posts\">\r\n                <div class=\"blog-post\">\r\n                    <div class=\"blog-text\">\r\n                        <h1>Building Revenue With Confidence</h1>\r\n                        <span>And avoiding failures</span>\r\n                    </div>\r\n                    <div class=\"blog-profile\">\r\n                        <img src=\"assets/demo/images/avatar/amyelsner.png\" alt=\"diamond-layout\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"blog-post\">\r\n                    <div class=\"blog-text\">\r\n                        <h1>Latest Marketing Trends</h1>\r\n                        <span>Don't miss out our tips</span>\r\n                    </div>\r\n                    <div class=\"blog-profile\">\r\n                        <img src=\"assets/demo/images/avatar/annafali.png\" alt=\"diamond-layout\" />\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"blog-post\">\r\n                    <div class=\"blog-text\">\r\n                        <h1>How To Reach Your Audience</h1>\r\n                        <span>10 ways to increase your efficiency</span>\r\n                    </div>\r\n                    <div class=\"blog-profile\">\r\n                        <img src=\"assets/demo/images/avatar/stephenshaw.png\" alt=\"diamond-layout\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Joch":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/icons.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Joch(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card icons-demo\">\r\n\t<h4>Icons</h4>\r\n\r\n\t<h5>Medias Pablo should watch by <b>me</b></h5>\r\n\t<p>Movies</p>\r\n\r\n\t<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\r\n\t\tO Turista <br>\r\n\t\tIlha do medo <br>\r\n\t\tFuja <br>\r\n\t\tMother <br>\r\n\t\t1922 <br>\r\n\t\tEfeito Borboleta <br>\r\n\t\tO castelo animado <br>\r\n\r\n\t</app-code>\r\n\r\n\t<p>Series</p>\r\n\r\n\t<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\r\n\t\tHow i met your mother <br>\r\n\t\tA Maldição da Mansão Bly<br>\r\n\t\tMissa da Meia-Noite <br>\r\n\t\tA Maldição da Residência Hill <br>\r\n\t\tDark <br>\r\n\t\tMarianne <br>\r\n\t\tStranger Things <br>\r\n\t</app-code>\r\n\r\n\t<p>Animes</p>\r\n\r\n\t<app-code lang=\"markup\" ngPreserveWhitespaces ngNonBindable>\r\n\t\tOne Piece <br>\r\n\t\tDemon Slayre <br>\r\n\t\tThe Promised Neverland <br>\r\n\t\tErased <br>\r\n\t\tBlack Butter <br>\r\n\t\tCowboy Bepop <br>\r\n\t\tTenku Shinpai <br>\r\n\r\n\t</app-code>\r\n</div>";
      /***/
    },

    /***/
    "JvKG":
    /*!*************************************************!*\
      !*** ./src/app/demo/view/treedemo.component.ts ***!
      \*************************************************/

    /*! exports provided: TreeDemoComponent */

    /***/
    function JvKG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeDemoComponent", function () {
        return TreeDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_treedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./treedemo.component.html */
      "+BCQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/nodeservice */
      "WCqc");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var TreeDemoComponent = /*#__PURE__*/function () {
        function TreeDemoComponent(nodeService, breadcrumbService) {
          _classCallCheck(this, TreeDemoComponent);

          this.nodeService = nodeService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Tree',
            routerLink: ['/uikit/tree']
          }]);
        }

        _createClass(TreeDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.nodeService.getFiles().then(function (files) {
              _this11.files3 = [{
                label: 'Root',
                children: files
              }];
            });
            this.cols = [{
              field: 'name',
              header: 'Name'
            }, {
              field: 'size',
              header: 'Size'
            }, {
              field: 'type',
              header: 'Type'
            }];
          }
        }]);

        return TreeDemoComponent;
      }();

      TreeDemoComponent.ctorParameters = function () {
        return [{
          type: _service_nodeservice__WEBPACK_IMPORTED_MODULE_3__["NodeService"]
        }, {
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbService"]
        }];
      };

      TreeDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_treedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TreeDemoComponent);
      /***/
    },

    /***/
    "KaQX":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.accessdenied.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function KaQX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body access-page\">\r\n\r\n    <div class=\"exception-top\">\r\n        <img src=\"assets/layout/images/icon-access.png\" alt=\"poseidon-layout\" />\r\n    </div>\r\n\r\n    <div class=\"exception-bottom\">\r\n        <div class=\"exception-wrapper\">\r\n            <span class=\"exception-summary\">Access Denied</span>\r\n            <span class=\"exception-detail\">You Don't Have Permissions To Access This Resource</span>\r\n            <button pButton pRipple [routerLink]=\"['/']\" label=\"Dashboard\" icon=\"pi pi-home\"></button>\r\n            <a [routerLink]=\"['/']\" class=\"logo\">\r\n                <img src=\"assets/layout/images/logo.svg\" alt=\"poseidon-layout\" class=\"logo-icon\"  />\r\n            </a>\r\n            <span class=\"exception-footer\">PrimeNG Poseidon</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "LwCC":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.error.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function LwCC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"exception-body error-page\">\r\n    <div class=\"exception-top\">\r\n        <img src=\"assets/layout/images/icon-error.png\" alt=\"poseidon-layout\" />\r\n    </div>\r\n\r\n    <div class=\"exception-bottom\">\r\n        <div class=\"exception-wrapper\">\r\n            <span class=\"exception-summary\">Exception Occured</span>\r\n            <span class=\"exception-detail\">Please Contact System Admin</span>\r\n            <button pButton pRipple [routerLink]=\"['/']\" label=\"Dashboard\" icon=\"pi pi-home\"></button>\r\n            <a [routerLink]=\"['/']\" class=\"logo\">\r\n                <img src=\"assets/layout/images/logo.svg\" alt=\"poseidon-layout\" class=\"logo-icon\"  />\r\n            </a>\r\n            <span class=\"exception-footer\">PrimeNG Poseidon</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "M6OY":
    /*!*******************************************************!*\
      !*** ./src/app/demo/view/floatlabeldemo.component.ts ***!
      \*******************************************************/

    /*! exports provided: FloatLabelDemoComponent */

    /***/
    function M6OY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FloatLabelDemoComponent", function () {
        return FloatLabelDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_floatlabeldemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./floatlabeldemo.component.html */
      "W2Tc");
      /* harmony import */


      var _floatlabeldemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./floatlabeldemo.scss */
      "eSy0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _service_countryservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/countryservice */
      "CuUz");

      var FloatLabelDemoComponent = /*#__PURE__*/function () {
        function FloatLabelDemoComponent(countryService, breadcrumbService) {
          _classCallCheck(this, FloatLabelDemoComponent);

          this.countryService = countryService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Float Label',
            routerLink: ['/uikit/floatlabel']
          }]);
          this.cities = [{
            name: 'New York',
            code: 'NY'
          }, {
            name: 'Rome',
            code: 'RM'
          }, {
            name: 'London',
            code: 'LDN'
          }, {
            name: 'Istanbul',
            code: 'IST'
          }, {
            name: 'Paris',
            code: 'PRS'
          }];
        }

        _createClass(FloatLabelDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.countryService.getCountries().then(function (countries) {
              _this12.countries = countries;
            });
          }
        }, {
          key: "searchCountry",
          value: function searchCountry(event) {
            // in a real application, make a request to a remote url with the query and
            // return filtered results, for demo we filter at client side
            var filtered = [];
            var query = event.query; // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < this.countries.length; i++) {
              var country = this.countries[i];

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
              }
            }

            this.filteredCountries = filtered;
          }
        }]);

        return FloatLabelDemoComponent;
      }();

      FloatLabelDemoComponent.ctorParameters = function () {
        return [{
          type: _service_countryservice__WEBPACK_IMPORTED_MODULE_5__["CountryService"]
        }, {
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbService"]
        }];
      };

      FloatLabelDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_floatlabeldemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_floatlabeldemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], FloatLabelDemoComponent);
      /***/
    },

    /***/
    "M8Z4":
    /*!***************************************************!*\
      !*** ./src/app/demo/view/buttondemo.component.ts ***!
      \***************************************************/

    /*! exports provided: ButtonDemoComponent */

    /***/
    function M8Z4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDemoComponent", function () {
        return ButtonDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buttondemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buttondemo.component.html */
      "mOOp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var ButtonDemoComponent = /*#__PURE__*/function () {
        function ButtonDemoComponent(breadcrumbService) {
          _classCallCheck(this, ButtonDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Button',
            routerLink: ['/uikit/button']
          }]);
        }

        _createClass(ButtonDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.items = [{
              label: 'Update',
              icon: 'pi pi-refresh'
            }, {
              label: 'Delete',
              icon: 'pi pi-times'
            }, {
              label: 'Angular.io',
              icon: 'pi pi-info',
              url: 'http://angular.io'
            }, {
              separator: true
            }, {
              label: 'Setup',
              icon: 'pi pi-cog'
            }];
          }
        }]);

        return ButtonDemoComponent;
      }();

      ButtonDemoComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      ButtonDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_buttondemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ButtonDemoComponent);
      /***/
    },

    /***/
    "MBEb":
    /*!******************************************!*\
      !*** ./src/app/demo/view/tabledemo.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function MBEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep {\n  /* Responsive */\n}\n:host ::ng-deep .p-paginator .p-paginator-current {\n  margin-left: auto;\n}\n:host ::ng-deep .p-progressbar {\n  height: 0.5rem;\n  background-color: #D8DADC;\n}\n:host ::ng-deep .p-progressbar .p-progressbar-value {\n  background-color: #607D8B;\n}\n:host ::ng-deep .table-header {\n  display: flex;\n  justify-content: space-between;\n}\n:host ::ng-deep .p-calendar .p-datepicker {\n  min-width: 25rem;\n}\n:host ::ng-deep .p-calendar .p-datepicker td {\n  font-weight: 400;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-header {\n  padding: 1rem;\n  text-align: left;\n  font-size: 1.5rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-paginator {\n  padding: 1rem;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th {\n  text-align: left;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder) {\n  text-transform: uppercase;\n}\n:host ::ng-deep .p-datatable.p-datatable-customers:not(.p-datatable-gridlines) .p-datatable-tbody > tr > td {\n  cursor: auto;\n}\n:host ::ng-deep .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n  display: none;\n}\n.customer-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.customer-badge.status-qualified {\n  background: #C8E6C9;\n  color: #256029;\n}\n.customer-badge.status-unqualified {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.customer-badge.status-negotiation {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.customer-badge.status-new {\n  background: #B3E5FC;\n  color: #23547B;\n}\n.customer-badge.status-renewal {\n  background: #ECCFFF;\n  color: #694382;\n}\n.customer-badge.status-proposal {\n  background: #FFD8B2;\n  color: #805B36;\n}\n.product-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.order-badge.order-delivered {\n  background: #C8E6C9;\n  color: #256029;\n}\n.order-badge.order-cancelled {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.order-badge.order-pending {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n.order-badge.order-returned {\n  background: #ECCFFF;\n  color: #694382;\n}\n@media screen and (max-width: 960px) {\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-thead > tr > th,\n:host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tfoot > tr > td {\n    display: none !important;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr {\n    border-bottom: 1px solid var(--surface-d);\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td {\n    text-align: left;\n    display: block;\n    border: 0 none !important;\n    width: 100% !important;\n    float: left;\n    clear: left;\n    border: 0 none;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {\n    padding: 0.4rem;\n    min-width: 30%;\n    display: inline-block;\n    margin: -0.4rem 1rem -0.4rem -0.4rem;\n    font-weight: bold;\n  }\n  :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td .p-progressbar {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXVEQyxlQUFBO0FBckREO0FBQUU7RUFDQyxpQkFBQTtBQUVIO0FBRUM7RUFDQyxjQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUVFO0VBQ0MseUJBQUE7QUFBSDtBQUlDO0VBQ0MsYUFBQTtFQUNBLDhCQUFBO0FBRkY7QUFLQztFQUNDLGdCQUFBO0FBSEY7QUFLRTtFQUNDLGdCQUFBO0FBSEg7QUFRRTtFQUNDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTkg7QUFTRTtFQUNDLGFBQUE7QUFQSDtBQVVFO0VBQ0MsZ0JBQUE7QUFSSDtBQVdFO0VBQ0MseUJBQUE7QUFUSDtBQWNFO0VBQ0MsWUFBQTtBQVpIO0FBaUJDO0VBQ0MsYUFBQTtBQWZGO0FBbUJBO0VBQ0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFoQkQ7QUFrQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFoQkY7QUFtQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFqQkY7QUFvQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFsQkY7QUFxQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFuQkY7QUFzQkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFwQkY7QUF1QkM7RUFDQyxtQkFBQTtFQUNBLGNBQUE7QUFyQkY7QUF5QkE7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQXRCRDtBQXdCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXRCRjtBQXlCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXZCRjtBQTBCQztFQUNDLG1CQUFBO0VBQ0EsY0FBQTtBQXhCRjtBQTRCQTtFQUNDLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBekJEO0FBMkJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBekJGO0FBNEJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBMUJGO0FBNkJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBM0JGO0FBOEJDO0VBQ0MsbUJBQUE7RUFDQSxjQUFBO0FBNUJGO0FBZ0NBO0VBSUk7O0lBRUMsd0JBQUE7RUFoQ0g7RUFtQ0U7SUFDQyx5Q0FBQTtFQWpDSDtFQW1DRztJQUNDLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFqQ0o7RUFtQ0k7SUFDQyxlQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0lBQ0Esb0NBQUE7SUFDQSxpQkFBQTtFQWpDTDtFQW9DSTtJQUNDLGtCQUFBO0VBbENMO0FBQ0YiLCJmaWxlIjoidGFibGVkZW1vLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAge1xyXG5cdC5wLXBhZ2luYXRvciB7XHJcblx0XHQucC1wYWdpbmF0b3ItY3VycmVudCB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnAtcHJvZ3Jlc3NiYXIge1xyXG5cdFx0aGVpZ2h0OiAuNXJlbTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNEOERBREM7XHJcblxyXG5cdFx0LnAtcHJvZ3Jlc3NiYXItdmFsdWUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LnRhYmxlLWhlYWRlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdH1cclxuXHJcblx0LnAtY2FsZW5kYXIgLnAtZGF0ZXBpY2tlciB7XHJcblx0XHRtaW4td2lkdGg6IDI1cmVtO1xyXG5cclxuXHRcdHRkIHtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5wLWRhdGF0YWJsZS5wLWRhdGF0YWJsZS1jdXN0b21lcnMge1xyXG5cdFx0LnAtZGF0YXRhYmxlLWhlYWRlciB7XHJcblx0XHRcdHBhZGRpbmc6IDFyZW07XHJcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5wLXBhZ2luYXRvciB7XHJcblx0XHRcdHBhZGRpbmc6IDFyZW07XHJcblx0XHR9XHJcblxyXG5cdFx0LnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCB7XHJcblx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0LnAtZHJvcGRvd24tbGFiZWw6bm90KC5wLXBsYWNlaG9sZGVyKSB7XHJcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQucC1kYXRhdGFibGUucC1kYXRhdGFibGUtY3VzdG9tZXJzOm5vdCgucC1kYXRhdGFibGUtZ3JpZGxpbmVzKSB7XHJcblx0XHQucC1kYXRhdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcclxuXHRcdFx0Y3Vyc29yOiBhdXRvO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyogUmVzcG9uc2l2ZSAqL1xyXG5cdC5wLWRhdGF0YWJsZS1jdXN0b21lcnMgLnAtZGF0YXRhYmxlLXRib2R5ID4gdHIgPiB0ZCAucC1jb2x1bW4tdGl0bGUge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbi5jdXN0b21lci1iYWRnZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdHBhZGRpbmc6IC4yNWVtIC41cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcblxyXG5cdCYuc3RhdHVzLXF1YWxpZmllZCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjQzhFNkM5O1xyXG5cdFx0Y29sb3I6ICMyNTYwMjk7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy11bnF1YWxpZmllZCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZDREQyO1xyXG5cdFx0Y29sb3I6ICNDNjM3Mzc7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1uZWdvdGlhdGlvbiB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkVFREFGO1xyXG5cdFx0Y29sb3I6ICM4QTUzNDA7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1uZXcge1xyXG5cdFx0YmFja2dyb3VuZDogI0IzRTVGQztcclxuXHRcdGNvbG9yOiAjMjM1NDdCO1xyXG5cdH1cclxuXHJcblx0Ji5zdGF0dXMtcmVuZXdhbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRUNDRkZGO1xyXG5cdFx0Y29sb3I6ICM2OTQzODI7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1wcm9wb3NhbCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZEOEIyO1xyXG5cdFx0Y29sb3I6ICM4MDVCMzY7XHJcblx0fVxyXG59XHJcblxyXG4ucHJvZHVjdC1iYWRnZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdHBhZGRpbmc6IC4yNWVtIC41cmVtO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC4zcHg7XHJcblxyXG5cdCYuc3RhdHVzLWluc3RvY2sge1xyXG5cdFx0YmFja2dyb3VuZDogI0M4RTZDOTtcclxuXHRcdGNvbG9yOiAjMjU2MDI5O1xyXG5cdH1cclxuXHJcblx0Ji5zdGF0dXMtb3V0b2ZzdG9jayB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZDREQyO1xyXG5cdFx0Y29sb3I6ICNDNjM3Mzc7XHJcblx0fVxyXG5cclxuXHQmLnN0YXR1cy1sb3dzdG9jayB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkVFREFGO1xyXG5cdFx0Y29sb3I6ICM4QTUzNDA7XHJcblx0fVxyXG59XHJcblxyXG4ub3JkZXItYmFkZ2Uge1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRwYWRkaW5nOiAuMjVlbSAuNXJlbTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxldHRlci1zcGFjaW5nOiAuM3B4O1xyXG5cclxuXHQmLm9yZGVyLWRlbGl2ZXJlZCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjQzhFNkM5O1xyXG5cdFx0Y29sb3I6ICMyNTYwMjk7XHJcblx0fVxyXG5cclxuXHQmLm9yZGVyLWNhbmNlbGxlZCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZDREQyO1xyXG5cdFx0Y29sb3I6ICNDNjM3Mzc7XHJcblx0fVxyXG5cclxuXHQmLm9yZGVyLXBlbmRpbmcge1xyXG5cdFx0YmFja2dyb3VuZDogI0ZFRURBRjtcclxuXHRcdGNvbG9yOiAjOEE1MzQwO1xyXG5cdH1cclxuXHJcblx0Ji5vcmRlci1yZXR1cm5lZCB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRUNDRkZGO1xyXG5cdFx0Y29sb3I6ICM2OTQzODI7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG5cdDpob3N0IDo6bmctZGVlcCB7XHJcblx0XHQucC1kYXRhdGFibGUge1xyXG5cdFx0XHQmLnAtZGF0YXRhYmxlLWN1c3RvbWVycyB7XHJcblx0XHRcdFx0LnAtZGF0YXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcclxuXHRcdFx0XHQucC1kYXRhdGFibGUtdGZvb3QgPiB0ciA+IHRkIHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5wLWRhdGF0YWJsZS10Ym9keSA+IHRyIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWQpO1xyXG5cclxuXHRcdFx0XHRcdD4gdGQge1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0Ym9yZGVyOiAwIG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdFx0XHRcdGNsZWFyOiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6IDAgbm9uZTtcclxuXHJcblx0XHRcdFx0XHRcdC5wLWNvbHVtbi10aXRsZSB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogLjRyZW07XHJcblx0XHRcdFx0XHRcdFx0bWluLXdpZHRoOiAzMCU7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogLS40cmVtIDFyZW0gLS40cmVtIC0uNHJlbTtcclxuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnAtcHJvZ3Jlc3NiYXIge1xyXG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IC41cmVtO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "MgdU":
    /*!*********************************************!*\
      !*** ./src/app/utilities/grid.component.ts ***!
      \*********************************************/

    /*! exports provided: GridComponent */

    /***/
    function MgdU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GridComponent", function () {
        return GridComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./grid.component.html */
      "I3un");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var GridComponent = /*#__PURE__*/function () {
        function GridComponent(breadcrumbService) {
          _classCallCheck(this, GridComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Utilities'
          }, {
            label: 'Grid',
            routerLink: ['/utilities/grid']
          }]);
        }

        _createClass(GridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.columns = [0, 1, 2, 3, 4, 5];
          }
        }, {
          key: "addColumn",
          value: function addColumn() {
            this.columns.push(this.columns.length);
          }
        }, {
          key: "removeColumn",
          value: function removeColumn() {
            this.columns.splice(-1, 1);
          }
        }]);

        return GridComponent;
      }();

      GridComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbService"]
        }];
      };

      GridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_grid_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'translateX(0)',
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          transform: 'translateX(50%)',
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: 0,
          opacity: 0,
          transform: 'translateX(50%)'
        }))])])],
        styles: ["\n        .box {\n            background-color: var(--surface-e);\n            text-align: center;\n            padding: 1.25rem;\n            font-size: 1.5rem;\n            border-radius: 4px;\n            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        }\n\n        .box-stretched {\n            height: 100%;\n        }\n\n        .vertical-container {\n            margin: 0;\n            height: 200px;\n            background: var(--surface-d);\n            border-radius: 4px;\n        }\n\n        .nested-grid .p-col-4 {\n            padding-bottom: 1rem;\n        }\n    "]
      })], GridComponent);
      /***/
    },

    /***/
    "NG6J":
    /*!*****************************************************!*\
      !*** ./src/app/pages/app.timelinedemo.component.ts ***!
      \*****************************************************/

    /*! exports provided: AppTimelineDemoComponent */

    /***/
    function NG6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppTimelineDemoComponent", function () {
        return AppTimelineDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_timelinedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.timelinedemo.component.html */
      "OM+n");
      /* harmony import */


      var _app_timelinedemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.timelinedemo.scss */
      "OyBH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var AppTimelineDemoComponent = /*#__PURE__*/function () {
        function AppTimelineDemoComponent(breadcrumbService) {
          _classCallCheck(this, AppTimelineDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Timeline',
            routerLink: ['/pages/timeline']
          }]);
        }

        _createClass(AppTimelineDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customEvents = [{
              status: 'Ordered',
              date: '15/10/2020 10:30',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].SHOPPING_CART,
              color: '#9C27B0',
              image: 'game-controller.jpg'
            }, {
              status: 'Processing',
              date: '15/10/2020 14:00',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].COG,
              color: '#673AB7'
            }, {
              status: 'Shipped',
              date: '15/10/2020 16:15',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].ENVELOPE,
              color: '#FF9800'
            }, {
              status: 'Delivered',
              date: '16/10/2020 10:00',
              icon: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeIcons"].CHECK,
              color: '#607D8B'
            }];
            this.horizontalEvents = ['2020', '2021', '2022', '2023'];
          }
        }]);

        return AppTimelineDemoComponent;
      }();

      AppTimelineDemoComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["AppBreadcrumbService"]
        }];
      };

      AppTimelineDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_app_timelinedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_timelinedemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppTimelineDemoComponent);
      /***/
    },

    /***/
    "NoYn":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/pablo-by-people/pablo-by-people.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NoYn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Display</h4>\r\n\t\t\t<div>\r\n\t\t\t\t<div>{{hate?.id}}</div>\r\n\t\t\t\t<div>{{hate?.name}}</div>\r\n\t\t\t\t<div>{{hate?.hate}}</div>\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<img src=\"{{hate?.image}}\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    "OM+n":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.timelinedemo.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h4>Timeline</h4>\r\n\r\n            <h5>Custom Timeline</h5>\r\n            <p-timeline [value]=\"customEvents\" align=\"alternate\" styleClass=\"customized-timeline\">\r\n                <ng-template pTemplate=\"marker\" let-event>\r\n                <span class=\"custom-marker p-shadow-2\" [style.backgroundColor]=\"event.color\">\r\n                    <i [ngClass]=\"event.icon\"></i>\r\n                </span>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"content\" let-event>\r\n                    <p-card [header]=\"event.status\" [subheader]=\"event.date\">\r\n                        <img *ngIf=\"event.image\" [src]=\"'assets/demo/images/product/' + event.image\" [alt]=\"event.name\" width=\"200\" class=\"p-shadow-2\" />\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt\r\n                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>\r\n                        <button pButton label=\"Read more\" class=\"p-button-text\"></button>\r\n                    </p-card>\r\n                </ng-template>\r\n            </p-timeline>\r\n\r\n            <h5 style=\"margin-top: 5em\">Horizontal - Alternate Align</h5>\r\n            <p-timeline [value]=\"horizontalEvents\" layout=\"horizontal\" align=\"alternate\">\r\n                <ng-template pTemplate=\"content\" let-event>\r\n                    {{event}}\r\n                </ng-template>\r\n                <ng-template pTemplate=\"opposite\" let-event>\r\n                    &nbsp;\r\n                </ng-template>\r\n            </p-timeline>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "OyBH":
    /*!*********************************************!*\
      !*** ./src/app/pages/app.timelinedemo.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function OyBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-marker {\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  justify-content: center;\n  color: #ffffff;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n::ng-deep .p-timeline-event-content,\n::ng-deep .p-timeline-event-opposite {\n  line-height: 1;\n}\n\n@media screen and (max-width: 960px) {\n  ::ng-deep .customized-timeline .p-timeline-event:nth-child(even) {\n    flex-direction: row !important;\n  }\n  ::ng-deep .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: left !important;\n  }\n  ::ng-deep .customized-timeline .p-timeline-event-opposite {\n    flex: 0;\n  }\n  ::ng-deep .customized-timeline .p-card {\n    margin-top: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFwcC50aW1lbGluZWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBSUk7O0VBRUksY0FBQTtBQURSOztBQUtBO0VBR1k7SUFDSSw4QkFBQTtFQUpkO0VBTWM7SUFDSSwyQkFBQTtFQUpsQjtFQVFVO0lBQ0ksT0FBQTtFQU5kO0VBU1U7SUFDSSxnQkFBQTtFQVBkO0FBQ0YiLCJmaWxlIjoiYXBwLnRpbWVsaW5lZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy90aW1lbGluZVxyXG4uY3VzdG9tLW1hcmtlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAucC10aW1lbGluZS1ldmVudC1jb250ZW50LFxyXG4gICAgLnAtdGltZWxpbmUtZXZlbnQtb3Bwb3NpdGUge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAuY3VzdG9taXplZC10aW1lbGluZSB7XHJcbiAgICAgICAgICAgIC5wLXRpbWVsaW5lLWV2ZW50Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLnAtdGltZWxpbmUtZXZlbnQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucC10aW1lbGluZS1ldmVudC1vcHBvc2l0ZSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucC1jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "P+IX":
    /*!************************************!*\
      !*** ./src/app/auth/auth.guard.ts ***!
      \************************************/

    /*! exports provided: AuthGuard */

    /***/
    function PIX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate() {
            return this.canLoad();
          }
        }, {
          key: "canLoad",
          value: function canLoad() {
            if (localStorage.getItem("token") != null) {
              return true;
            } else {
              this.router.navigate(['/login']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthGuard);
      /***/
    },

    /***/
    "P2fs":
    /*!*********************************************************!*\
      !*** ./src/app/demo/view/invalidstatedemo.component.ts ***!
      \*********************************************************/

    /*! exports provided: InvalidStateDemoComponent */

    /***/
    function P2fs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvalidStateDemoComponent", function () {
        return InvalidStateDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invalidstatedemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invalidstatedemo.component.html */
      "Bm+J");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _service_countryservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/countryservice */
      "CuUz");

      var InvalidStateDemoComponent = /*#__PURE__*/function () {
        function InvalidStateDemoComponent(countryService, breadcrumbService) {
          _classCallCheck(this, InvalidStateDemoComponent);

          this.countryService = countryService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Invalid State',
            routerLink: ['/uikit/invalidstate']
          }]);
          this.cities = [{
            name: 'New York',
            code: 'NY'
          }, {
            name: 'Rome',
            code: 'RM'
          }, {
            name: 'London',
            code: 'LDN'
          }, {
            name: 'Istanbul',
            code: 'IST'
          }, {
            name: 'Paris',
            code: 'PRS'
          }];
        }

        _createClass(InvalidStateDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.countryService.getCountries().then(function (countries) {
              _this13.countries = countries;
            });
          }
        }, {
          key: "searchCountry",
          value: function searchCountry(event) {
            // in a real application, make a request to a remote url with the query and return filtered results,
            // for demo we filter at client side
            var filtered = [];
            var query = event.query;

            for (var i = 0; i < this.countries.length; i++) {
              var country = this.countries[i];

              if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
              }
            }

            this.filteredCountries = filtered;
          }
        }]);

        return InvalidStateDemoComponent;
      }();

      InvalidStateDemoComponent.ctorParameters = function () {
        return [{
          type: _service_countryservice__WEBPACK_IMPORTED_MODULE_4__["CountryService"]
        }, {
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      InvalidStateDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_invalidstatedemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], InvalidStateDemoComponent);
      /***/
    },

    /***/
    "PmNK":
    /*!***********************************************************************!*\
      !*** ./src/app/demo/view/pablo-by-people/people-by-people.service.ts ***!
      \***********************************************************************/

    /*! exports provided: PabloByPeopleService */

    /***/
    function PmNK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PabloByPeopleService", function () {
        return PabloByPeopleService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PabloByPeopleService = /*#__PURE__*/function () {
        function PabloByPeopleService(http) {
          _classCallCheck(this, PabloByPeopleService);

          this.http = http;
        }

        _createClass(PabloByPeopleService, [{
          key: "getCustomersMedium",
          value: function getCustomersMedium() {
            return this.http.get('assets/demo/data/hates/hates.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return PabloByPeopleService;
      }();

      PabloByPeopleService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PabloByPeopleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], PabloByPeopleService);
      /***/
    },

    /***/
    "Pv7A":
    /*!******************************************************!*\
      !*** ./src/app/demo/view/documentation.component.ts ***!
      \******************************************************/

    /*! exports provided: DocumentationComponent */

    /***/
    function Pv7A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function () {
        return DocumentationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./documentation.component.html */
      "a6dQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var DocumentationComponent = function DocumentationComponent(breadcrumbService) {
        _classCallCheck(this, DocumentationComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Start'
        }, {
          label: 'Documentation',
          routerLink: ['/documentation']
        }]);
      };

      DocumentationComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      DocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        .docs h1 {\n            margin-top: 30px;\n        }\n\n        .docs pre.doc-command {\n            font-family: monospace;\n            background-color: #2d353c;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .inline-code {\n            background-color: #0C2238;\n            color: #dddddd;\n            font-style: normal;\n            font-size: 13px;\n            padding: 0 .5em;\n        }"]
      })], DocumentationComponent);
      /***/
    },

    /***/
    "RPTm":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function RPTm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-widgets\">\r\n    <div class=\"p-grid\">\r\n        <div class=\"p-col-12 p-md-12 p-xl-1\"></div>\r\n        <div class=\"p-col-12 p-md-12 p-xl-10\">\r\n            <div class=\"card profile\">\r\n                <div class=\"profile-header\" style=\"background-image: url({{user?.background}});\">\r\n                    <img src=\"{{user?.image}}\" alt=\"poseidon-layout\" style=\"border-radius: 100px;\" />\r\n                </div>\r\n                <div class=\"profile-content\">\r\n                    <h6>{{user?.name}}</h6>\r\n                    <span>{{user?.profile}} 👑</span>\r\n                    <p-button type=\"button\" label=\"Go Home\" routerLink=\"/home\"></p-button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-grid\">\r\n        <div class=\"p-col-12 p-md-12 p-xl-1\"></div>\r\n        <div class=\"p-col-12 p-md-12 p-xl-10\">\r\n            <div class=\"pricing-card classic\">\r\n                <div class=\"pricing-header\">\r\n                    <div class=\"card p-fluid\">\r\n                        <h5>Pablo by {{user?.name}}</h5>\r\n                        <div class=\"p-grid\">\r\n                            <div class=\"p-col-2\"></div>\r\n                            <div class=\"p-col-8\">\r\n                                {{user?.hate}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"pricing-content\">\r\n                    <ul>\r\n                        <!-- <img src=\"./../../../assets/images/galery/2.jfif\" alt=\"\"> -->\r\n                        <li>\r\n                            <p-button type=\"button\" label=\"SEE PICTURES\" routerLink=\"/utilities/display\"\r\n                                class=\"p-button-danger\">\r\n                            </p-button>\r\n                        </li>\r\n                        <li>\r\n                            <p-button type=\"button\" label=\"TRY QUIZZ\" routerLink=\"/pages/crud\" class=\"p-button-info\">\r\n                            </p-button>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SsAV":
    /*!*********************************************!*\
      !*** ./src/app/utilities/text.component.ts ***!
      \*********************************************/

    /*! exports provided: TextComponent */

    /***/
    function SsAV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextComponent", function () {
        return TextComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_text_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./text.component.html */
      "zYCZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var TextComponent = function TextComponent(breadcrumbService) {
        _classCallCheck(this, TextComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Text',
          routerLink: ['/utilities/text']
        }]);
      };

      TextComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      TextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_text_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n        .demo-container {\n            border: 1px solid var(--surface-d);\n        }\n    "]
      })], TextComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(primengConfig) {
          _classCallCheck(this, AppComponent);

          this.primengConfig = primengConfig;
          this.topbarTheme = 'dark';
          this.menuTheme = 'dark';
          this.layoutMode = 'dark';
          this.menuMode = 'horizontal';
          this.isRTL = false;
          this.inputStyle = 'outlined';
          this.ripple = true;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.primengConfig.ripple = true;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeNGConfig"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "UV3p":
    /*!******************************************!*\
      !*** ./src/app/demo/view/mediademo.scss ***!
      \******************************************/

    /*! exports provided: default */

    /***/
    function UV3p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".product-item .product-item-content {\n  border: 1px solid var(--surface-d);\n  border-radius: 3px;\n  margin: 0.3rem;\n  text-align: center;\n  padding: 2rem 0;\n}\n.product-item .product-image {\n  width: 50%;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}\n.product-badge {\n  border-radius: 2px;\n  padding: 0.25em 0.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  letter-spacing: 0.3px;\n}\n.product-badge.status-instock {\n  background: #C8E6C9;\n  color: #256029;\n}\n.product-badge.status-outofstock {\n  background: #FFCDD2;\n  color: #C63737;\n}\n.product-badge.status-lowstock {\n  background: #FEEDAF;\n  color: #8A5340;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWRpYWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVI7QUFHSTtFQUNJLFVBQUE7RUFDQSx3RUFBQTtBQURSO0FBS0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUZKO0FBSUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFGUjtBQUtJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBSFI7QUFNSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUpSIiwiZmlsZSI6Im1lZGlhZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaXRlbSB7XHJcbiAgICAucHJvZHVjdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtZCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG1hcmdpbjogLjNyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMylcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1Y3QtYmFkZ2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgcGFkZGluZzogLjI1ZW0gLjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xyXG5cclxuICAgICYuc3RhdHVzLWluc3RvY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDOEU2Qzk7XHJcbiAgICAgICAgY29sb3I6ICMyNTYwMjk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdGF0dXMtb3V0b2ZzdG9jayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQ0REMjtcclxuICAgICAgICBjb2xvcjogI0M2MzczNztcclxuICAgIH1cclxuXHJcbiAgICAmLnN0YXR1cy1sb3dzdG9jayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZFRURBRjtcclxuICAgICAgICBjb2xvcjogIzhBNTM0MDtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Uri6":
    /*!************************************************************************!*\
      !*** ./src/app/demo/view/pablo-by-people/pablo-by-people.component.ts ***!
      \************************************************************************/

    /*! exports provided: PabloByPeopleComponent */

    /***/
    function Uri6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PabloByPeopleComponent", function () {
        return PabloByPeopleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pablo_by_people_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pablo-by-people.component.html */
      "NoYn");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _people_by_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./people-by-people.service */
      "PmNK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PabloByPeopleComponent = /*#__PURE__*/function () {
        function PabloByPeopleComponent(breadcrumbService, pabloBypeopleService, route) {
          _classCallCheck(this, PabloByPeopleComponent);

          this.breadcrumbService = breadcrumbService;
          this.pabloBypeopleService = pabloBypeopleService;
          this.route = route;
          this.breadcrumbService.setItems([{
            label: 'Utilities'
          }, {
            label: 'Pablo by People',
            routerLink: ['/utilities/display']
          }]);
        }

        _createClass(PabloByPeopleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.route.params.subscribe(function (params) {
              _this14.onGetData(params['id']);
            });
          }
        }, {
          key: "onGetData",
          value: function onGetData(id) {
            var _this15 = this;

            this.pabloBypeopleService.getCustomersMedium().then(function (x) {
              _this15.hate = x.find(function (x) {
                return x.id == id;
              });
            });
          }
        }]);

        return PabloByPeopleComponent;
      }();

      PabloByPeopleComponent.ctorParameters = function () {
        return [{
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["AppBreadcrumbService"]
        }, {
          type: _people_by_people_service__WEBPACK_IMPORTED_MODULE_3__["PabloByPeopleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      PabloByPeopleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        template: _raw_loader_pablo_by_people_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PabloByPeopleComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
      /***/
    },

    /***/
    "W2Tc":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/floatlabeldemo.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function W2Tc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-nogutter floatlabel-demo\">\r\n    <div class=\"card p-fluid\" style=\"width: 100%\">\r\n        <h5>Float Label</h5>\r\n        <p>All input text components support floating labels by adding (<mark>.p-float-label</mark>) to wrapper class.</p>\r\n        <div class=\"p-grid\">\r\n            <div class=\"p-col-12 p-md-6\">\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <input type=\"text\" id=\"inputtext\" pInputText [(ngModel)]=\"value1\">\r\n                        <label for=\"inputtext\">InputText</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label p-input-icon-left\">\r\n                        <i class=\"pi pi-search\"></i>\r\n                        <input type=\"text\" id=\"lefticon\" pInputText [(ngModel)]=\"value11\">\r\n                        <label for=\"lefticon\">Left Icon</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label p-input-icon-right\">\r\n                        <input type=\"text\" id=\"righticon\" pInputText [(ngModel)]=\"value12\">\r\n                        <label for=\"righticon\">Right Icon</label>\r\n                        <i class=\"pi pi-spin pi-spinner\"></i>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <p-inputMask inputId=\"inputmask\" mask=\"99/99/9999\" [(ngModel)]=\"value5\"></p-inputMask>\r\n                        <label for=\"inputmask\">InputMask</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <p-inputNumber inputId=\"inputnumber\" [(ngModel)]=\"value6\"></p-inputNumber>\r\n                        <label for=\"inputnumber\">InputNumber</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <p-chips inputId=\"chips\" [(ngModel)]=\"value4\"></p-chips>\r\n                        <label for=\"chips\">Chips</label>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"p-col-12 p-md-6\">\r\n                <div class=\"p-field\">\r\n                    <div class=\"p-inputgroup\">\r\n                        <span class=\"p-inputgroup-addon\">\r\n                            <i class=\"pi pi-user\"></i>\r\n                        </span>\r\n                        <span class=\"p-float-label\">\r\n                            <input type=\"text\" id=\"inputgroup\" pInputText [(ngModel)]=\"value7\">\r\n                            <label for=\"inputgroup\">InputGroup</label>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <p-autoComplete inputId=\"autocomplete\" [(ngModel)]=\"value2\" [suggestions]=\"filteredCountries\"\r\n                                        (completeMethod)=\"searchCountry($event)\" field=\"name\"></p-autoComplete>\r\n                        <label for=\"autocomplete\">AutoComplete</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <p-calendar inputId=\"calendar\" [(ngModel)]=\"value3\"></p-calendar>\r\n                        <label for=\"calendar\">Calendar</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <p-dropdown inputId=\"dropdown\" [autoDisplayFirst]=\"false\" [options]=\"cities\" [(ngModel)]=\"value8\"\r\n                                    optionLabel=\"name\"></p-dropdown>\r\n                        <label for=\"dropdown\">Dropdown</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <p-multiSelect inputId=\"multiselect\" [options]=\"cities\" [(ngModel)]=\"value9\" optionLabel=\"name\"\r\n                                       [filter]=\"false\"></p-multiSelect>\r\n                        <label for=\"multiselect\">MultiSelect</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"p-field\">\r\n                    <span class=\"p-float-label\">\r\n                        <textarea inputId=\"textarea\" rows=\"3\" cols=\"30\" [(ngModel)]=\"value10\" pInputTextarea></textarea>\r\n                        <label for=\"textarea\">Textarea</label>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "WCqc":
    /*!*********************************************!*\
      !*** ./src/app/demo/service/nodeservice.ts ***!
      \*********************************************/

    /*! exports provided: NodeService */

    /***/
    function WCqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodeService", function () {
        return NodeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NodeService = /*#__PURE__*/function () {
        function NodeService(http) {
          _classCallCheck(this, NodeService);

          this.http = http;
        }

        _createClass(NodeService, [{
          key: "getFiles",
          value: function getFiles() {
            return this.http.get('assets/demo/data/files.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getLazyFiles",
          value: function getLazyFiles() {
            return this.http.get('assets/demo/data/files-lazy.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getFilesystem",
          value: function getFilesystem() {
            return this.http.get('assets/demo/data/filesystem.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }, {
          key: "getLazyFilesystem",
          value: function getLazyFilesystem() {
            return this.http.get('assets/demo/data/filesystem-lazy.json').toPromise().then(function (res) {
              return res.data;
            });
          }
        }]);

        return NodeService;
      }();

      NodeService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      NodeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], NodeService);
      /***/
    },

    /***/
    "WOi/":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/mediademo.component.ts ***!
      \**************************************************/

    /*! exports provided: MediaDemoComponent */

    /***/
    function WOi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MediaDemoComponent", function () {
        return MediaDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_mediademo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./mediademo.component.html */
      "IzyT");
      /* harmony import */


      var _mediademo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mediademo.scss */
      "UV3p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");
      /* harmony import */


      var _service_photoservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/photoservice */
      "xLnY");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");

      var MediaDemoComponent = /*#__PURE__*/function () {
        function MediaDemoComponent(productService, photoService, breadcrumbService) {
          _classCallCheck(this, MediaDemoComponent);

          this.productService = productService;
          this.photoService = photoService;
          this.breadcrumbService = breadcrumbService;
          this.galleriaResponsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 5
          }, {
            breakpoint: '960px',
            numVisible: 4
          }, {
            breakpoint: '768px',
            numVisible: 3
          }, {
            breakpoint: '560px',
            numVisible: 1
          }];
          this.carouselResponsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
          }, {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
          }, {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
          }];
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Media',
            routerLink: ['/uikit/media']
          }]);
        }

        _createClass(MediaDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.productService.getProductsSmall().then(function (products) {
              _this16.products = products;
            });
            this.photoService.getImages().then(function (images) {
              _this16.images = images;
            });
          }
        }]);

        return MediaDemoComponent;
      }();

      MediaDemoComponent.ctorParameters = function () {
        return [{
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: _service_photoservice__WEBPACK_IMPORTED_MODULE_5__["PhotoService"]
        }, {
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_6__["AppBreadcrumbService"]
        }];
      };

      MediaDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_mediademo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mediademo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MediaDemoComponent);
      /***/
    },

    /***/
    "Y5Lh":
    /*!****************************************************!*\
      !*** ./src/app/pages/profile/profile.component.ts ***!
      \****************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function Y5Lh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "RPTm");
      /* harmony import */


      var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../login/login.service */
      "fxZ6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(service, route) {
          _classCallCheck(this, ProfileComponent);

          this.service = service;
          this.route = route;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.route.params.subscribe(function (params) {
              _this17.service.getDataUserById(params['id']).then(function (x) {
                console.log(x);
                _this17.user = x;
              });
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ProfileComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _pages_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/login/login.service */
      "fxZ6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var primeng_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/accordion */
      "7LiV");
      /* harmony import */


      var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/autocomplete */
      "V5BG");
      /* harmony import */


      var primeng_avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/avatar */
      "+F6F");
      /* harmony import */


      var primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! primeng/avatargroup */
      "sKsN");
      /* harmony import */


      var primeng_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! primeng/badge */
      "fqaE");
      /* harmony import */


      var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! primeng/breadcrumb */
      "URcr");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! primeng/calendar */
      "eO1q");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var primeng_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! primeng/carousel */
      "LwO5");
      /* harmony import */


      var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! primeng/cascadeselect */
      "A1Di");
      /* harmony import */


      var primeng_chart__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! primeng/chart */
      "I5S5");
      /* harmony import */


      var primeng_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! primeng/checkbox */
      "Ji6n");
      /* harmony import */


      var primeng_chip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! primeng/chip */
      "wxlm");
      /* harmony import */


      var primeng_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! primeng/chips */
      "RGqm");
      /* harmony import */


      var primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! primeng/codehighlighter */
      "yjSK");
      /* harmony import */


      var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! primeng/confirmdialog */
      "Nf9I");
      /* harmony import */


      var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! primeng/confirmpopup */
      "RTT/");
      /* harmony import */


      var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! primeng/colorpicker */
      "bv7W");
      /* harmony import */


      var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! primeng/contextmenu */
      "yNBN");
      /* harmony import */


      var primeng_dataview__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! primeng/dataview */
      "8CEF");
      /* harmony import */


      var primeng_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! primeng/dialog */
      "/RsI");
      /* harmony import */


      var primeng_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! primeng/divider */
      "lUkA");
      /* harmony import */


      var primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! primeng/dropdown */
      "arFO");
      /* harmony import */


      var primeng_fieldset__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! primeng/fieldset */
      "fk4S");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! primeng/fileupload */
      "NCSE");
      /* harmony import */


      var primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! primeng/fullcalendar */
      "9R/8");
      /* harmony import */


      var primeng_galleria__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! primeng/galleria */
      "2art");
      /* harmony import */


      var primeng_inplace__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! primeng/inplace */
      "QvPt");
      /* harmony import */


      var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! primeng/inputnumber */
      "Ks7X");
      /* harmony import */


      var primeng_inputmask__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! primeng/inputmask */
      "CwEU");
      /* harmony import */


      var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! primeng/inputswitch */
      "rLzU");
      /* harmony import */


      var primeng_inputtext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! primeng/inputtext */
      "7kUa");
      /* harmony import */


      var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! primeng/inputtextarea */
      "zFJ7");
      /* harmony import */


      var primeng_knob__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! primeng/knob */
      "EbAv");
      /* harmony import */


      var primeng_lightbox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! primeng/lightbox */
      "LnpQ");
      /* harmony import */


      var primeng_listbox__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! primeng/listbox */
      "+07z");
      /* harmony import */


      var primeng_megamenu__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! primeng/megamenu */
      "BAkx");
      /* harmony import */


      var primeng_menu__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! primeng/menu */
      "1SLH");
      /* harmony import */


      var primeng_menubar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! primeng/menubar */
      "b1Ni");
      /* harmony import */


      var primeng_messages__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! primeng/messages */
      "dts7");
      /* harmony import */


      var primeng_message__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! primeng/message */
      "FMpt");
      /* harmony import */


      var primeng_multiselect__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! primeng/multiselect */
      "lVkt");
      /* harmony import */


      var primeng_orderlist__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! primeng/orderlist */
      "cQJI");
      /* harmony import */


      var primeng_organizationchart__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! primeng/organizationchart */
      "dQiQ");
      /* harmony import */


      var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! primeng/overlaypanel */
      "z8Lm");
      /* harmony import */


      var primeng_paginator__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! primeng/paginator */
      "6t4m");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! primeng/panel */
      "7CaW");
      /* harmony import */


      var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! primeng/panelmenu */
      "kSmT");
      /* harmony import */


      var primeng_password__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! primeng/password */
      "+YxP");
      /* harmony import */


      var primeng_picklist__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! primeng/picklist */
      "iHf9");
      /* harmony import */


      var primeng_progressbar__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! primeng/progressbar */
      "+DzE");
      /* harmony import */


      var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! primeng/radiobutton */
      "LuMj");
      /* harmony import */


      var primeng_rating__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! primeng/rating */
      "Js94");
      /* harmony import */


      var primeng_ripple__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! primeng/ripple */
      "Q4Mo");
      /* harmony import */


      var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! primeng/scrollpanel */
      "SSqW");
      /* harmony import */


      var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! primeng/scrolltop */
      "JD6B");
      /* harmony import */


      var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! primeng/selectbutton */
      "5o1E");
      /* harmony import */


      var primeng_sidebar__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! primeng/sidebar */
      "jLSX");
      /* harmony import */


      var primeng_skeleton__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! primeng/skeleton */
      "jeV5");
      /* harmony import */


      var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
      /*! primeng/slidemenu */
      "3k5r");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");
      /* harmony import */


      var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
      /*! primeng/splitbutton */
      "Wq6t");
      /* harmony import */


      var primeng_splitter__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
      /*! primeng/splitter */
      "ZZi9");
      /* harmony import */


      var primeng_steps__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
      /*! primeng/steps */
      "KcHJ");
      /* harmony import */


      var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
      /*! primeng/tabmenu */
      "c+7h");
      /* harmony import */


      var primeng_table__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
      /*! primeng/table */
      "rEr+");
      /* harmony import */


      var primeng_tabview__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
      /*! primeng/tabview */
      "dPl2");
      /* harmony import */


      var primeng_tag__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(
      /*! primeng/tag */
      "hYoW");
      /* harmony import */


      var primeng_terminal__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(
      /*! primeng/terminal */
      "6s7b");
      /* harmony import */


      var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(
      /*! primeng/tieredmenu */
      "B16f");
      /* harmony import */


      var primeng_timeline__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(
      /*! primeng/timeline */
      "mgTN");
      /* harmony import */


      var primeng_toast__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(
      /*! primeng/toast */
      "Gxio");
      /* harmony import */


      var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(
      /*! primeng/togglebutton */
      "Y+ZO");
      /* harmony import */


      var primeng_toolbar__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(
      /*! primeng/toolbar */
      "5EWq");
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(
      /*! primeng/tooltip */
      "xlun");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(
      /*! primeng/tree */
      "g9iH");
      /* harmony import */


      var primeng_treetable__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(
      /*! primeng/treetable */
      "EVgl");
      /* harmony import */


      var primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(
      /*! primeng/virtualscroller */
      "+/m8");
      /* harmony import */


      var _app_code_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(
      /*! ./app.code.component */
      "ZnEj");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _app_config_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(
      /*! ./app.config.component */
      "jaM/");
      /* harmony import */


      var _app_menu_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(
      /*! ./app.menu.component */
      "DByU");
      /* harmony import */


      var _app_menuitem_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(
      /*! ./app.menuitem.component */
      "kA7y");
      /* harmony import */


      var _app_rightpanel_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(
      /*! ./app.rightpanel.component */
      "hZ8T");
      /* harmony import */


      var _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(
      /*! ./app.breadcrumb.component */
      "ITH+");
      /* harmony import */


      var _app_topbar_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(
      /*! ./app.topbar.component */
      "7APR");
      /* harmony import */


      var _app_footer_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(
      /*! ./app.footer.component */
      "ffRT");
      /* harmony import */


      var _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(
      /*! ./demo/view/dashboarddemo.component */
      "yd5u");
      /* harmony import */


      var _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(
      /*! ./demo/view/formlayoutdemo.component */
      "CfVz");
      /* harmony import */


      var _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(
      /*! ./demo/view/floatlabeldemo.component */
      "M6OY");
      /* harmony import */


      var _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(
      /*! ./demo/view/invalidstatedemo.component */
      "P2fs");
      /* harmony import */


      var _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(
      /*! ./demo/view/inputdemo.component */
      "DlPI");
      /* harmony import */


      var _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(
      /*! ./demo/view/buttondemo.component */
      "M8Z4");
      /* harmony import */


      var _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(
      /*! ./demo/view/tabledemo.component */
      "Hf0O");
      /* harmony import */


      var _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(
      /*! ./demo/view/treedemo.component */
      "JvKG");
      /* harmony import */


      var _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(
      /*! ./demo/view/panelsdemo.component */
      "8jOm");
      /* harmony import */


      var _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(
      /*! ./demo/view/overlaysdemo.component */
      "4Pek");
      /* harmony import */


      var _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(
      /*! ./demo/view/mediademo.component */
      "WOi/");
      /* harmony import */


      var _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(
      /*! ./demo/view/menusdemo.component */
      "gitr");
      /* harmony import */


      var _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(
      /*! ./demo/view/messagesdemo.component */
      "uQp2");
      /* harmony import */


      var _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(
      /*! ./demo/view/miscdemo.component */
      "j1Et");
      /* harmony import */


      var _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(
      /*! ./demo/view/emptydemo.component */
      "a9iL");
      /* harmony import */


      var _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(
      /*! ./demo/view/chartsdemo.component */
      "aOMY");
      /* harmony import */


      var _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(
      /*! ./demo/view/filedemo.component */
      "7s2l");
      /* harmony import */


      var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(
      /*! ./demo/view/documentation.component */
      "Pv7A");
      /* harmony import */


      var _utilities_display_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(
      /*! ./utilities/display.component */
      "Znji");
      /* harmony import */


      var _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(
      /*! ./utilities/elevation.component */
      "8iZH");
      /* harmony import */


      var _utilities_grid_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(
      /*! ./utilities/grid.component */
      "MgdU");
      /* harmony import */


      var _utilities_icons_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(
      /*! ./utilities/icons.component */
      "s5Nh");
      /* harmony import */


      var _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(
      /*! ./utilities/widgets.component */
      "qBte");
      /* harmony import */


      var _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(
      /*! ./utilities/spacing.component */
      "p563");
      /* harmony import */


      var _utilities_typography_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(
      /*! ./utilities/typography.component */
      "3Li2");
      /* harmony import */


      var _utilities_text_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(
      /*! ./utilities/text.component */
      "SsAV");
      /* harmony import */


      var _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(
      /*! ./pages/app.timelinedemo.component */
      "NG6J");
      /* harmony import */


      var _pages_app_invoice_component__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(
      /*! ./pages/app.invoice.component */
      "GKnm");
      /* harmony import */


      var _pages_app_help_component__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(
      /*! ./pages/app.help.component */
      "Bxr+");
      /* harmony import */


      var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(
      /*! ./pages/app.error.component */
      "anCR");
      /* harmony import */


      var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(
      /*! ./pages/app.accessdenied.component */
      "pRB7");
      /* harmony import */


      var _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(
      /*! ./demo/service/countryservice */
      "CuUz");
      /* harmony import */


      var _demo_service_customerservice__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(
      /*! ./demo/service/customerservice */
      "04hL");
      /* harmony import */


      var _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(
      /*! ./demo/service/eventservice */
      "fgiE");
      /* harmony import */


      var _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(
      /*! ./demo/service/iconservice */
      "4Sr2");
      /* harmony import */


      var _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(
      /*! ./demo/service/nodeservice */
      "WCqc");
      /* harmony import */


      var _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(
      /*! ./demo/service/photoservice */
      "xLnY");
      /* harmony import */


      var _demo_service_productservice__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(
      /*! ./demo/service/productservice */
      "ibcK");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(
      /*! ./app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _demo_view_pablo_by_people_people_by_people_service__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(
      /*! ./demo/view/pablo-by-people/people-by-people.service */
      "PmNK");
      /* harmony import */


      var _demo_view_pablo_by_people_pablo_by_people_component__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(
      /*! ./demo/view/pablo-by-people/pablo-by-people.component */
      "Uri6");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_quizz_app_crud_component__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(
      /*! ./pages/quizz/app.crud.component */
      "2NkY");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutoCompleteModule"], primeng_avatargroup__WEBPACK_IMPORTED_MODULE_13__["AvatarGroupModule"], primeng_avatar__WEBPACK_IMPORTED_MODULE_12__["AvatarModule"], primeng_badge__WEBPACK_IMPORTED_MODULE_14__["BadgeModule"], primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbModule"], primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarModule"], primeng_card__WEBPACK_IMPORTED_MODULE_18__["CardModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselModule"], primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_20__["CascadeSelectModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_21__["ChartModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_22__["CheckboxModule"], primeng_chip__WEBPACK_IMPORTED_MODULE_23__["ChipModule"], primeng_chips__WEBPACK_IMPORTED_MODULE_24__["ChipsModule"], primeng_codehighlighter__WEBPACK_IMPORTED_MODULE_25__["CodeHighlighterModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialogModule"], primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_27__["ConfirmPopupModule"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_28__["ColorPickerModule"], primeng_contextmenu__WEBPACK_IMPORTED_MODULE_29__["ContextMenuModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_30__["DataViewModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_31__["DialogModule"], primeng_divider__WEBPACK_IMPORTED_MODULE_32__["DividerModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_33__["DropdownModule"], primeng_fieldset__WEBPACK_IMPORTED_MODULE_34__["FieldsetModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_35__["FileUploadModule"], primeng_fullcalendar__WEBPACK_IMPORTED_MODULE_36__["FullCalendarModule"], primeng_galleria__WEBPACK_IMPORTED_MODULE_37__["GalleriaModule"], primeng_inplace__WEBPACK_IMPORTED_MODULE_38__["InplaceModule"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_39__["InputNumberModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_40__["InputMaskModule"], primeng_inputswitch__WEBPACK_IMPORTED_MODULE_41__["InputSwitchModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_42__["InputTextModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_43__["InputTextareaModule"], primeng_knob__WEBPACK_IMPORTED_MODULE_44__["KnobModule"], primeng_lightbox__WEBPACK_IMPORTED_MODULE_45__["LightboxModule"], primeng_listbox__WEBPACK_IMPORTED_MODULE_46__["ListboxModule"], primeng_megamenu__WEBPACK_IMPORTED_MODULE_47__["MegaMenuModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_48__["MenuModule"], primeng_menubar__WEBPACK_IMPORTED_MODULE_49__["MenubarModule"], primeng_message__WEBPACK_IMPORTED_MODULE_51__["MessageModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_50__["MessagesModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_52__["MultiSelectModule"], primeng_orderlist__WEBPACK_IMPORTED_MODULE_53__["OrderListModule"], primeng_organizationchart__WEBPACK_IMPORTED_MODULE_54__["OrganizationChartModule"], primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_55__["OverlayPanelModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_56__["PaginatorModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_57__["PanelModule"], primeng_panelmenu__WEBPACK_IMPORTED_MODULE_58__["PanelMenuModule"], primeng_password__WEBPACK_IMPORTED_MODULE_59__["PasswordModule"], primeng_picklist__WEBPACK_IMPORTED_MODULE_60__["PickListModule"], primeng_progressbar__WEBPACK_IMPORTED_MODULE_61__["ProgressBarModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_62__["RadioButtonModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_63__["RatingModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_64__["RippleModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_65__["ScrollPanelModule"], primeng_scrolltop__WEBPACK_IMPORTED_MODULE_66__["ScrollTopModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_67__["SelectButtonModule"], primeng_sidebar__WEBPACK_IMPORTED_MODULE_68__["SidebarModule"], primeng_skeleton__WEBPACK_IMPORTED_MODULE_69__["SkeletonModule"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_70__["SlideMenuModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_71__["SliderModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_72__["SplitButtonModule"], primeng_splitter__WEBPACK_IMPORTED_MODULE_73__["SplitterModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_74__["StepsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_76__["TableModule"], primeng_tabmenu__WEBPACK_IMPORTED_MODULE_75__["TabMenuModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_77__["TabViewModule"], primeng_tag__WEBPACK_IMPORTED_MODULE_78__["TagModule"], primeng_terminal__WEBPACK_IMPORTED_MODULE_79__["TerminalModule"], primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_80__["TieredMenuModule"], primeng_timeline__WEBPACK_IMPORTED_MODULE_81__["TimelineModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_82__["ToastModule"], primeng_togglebutton__WEBPACK_IMPORTED_MODULE_83__["ToggleButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_84__["ToolbarModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_85__["TooltipModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_86__["TreeModule"], primeng_treetable__WEBPACK_IMPORTED_MODULE_87__["TreeTableModule"], primeng_virtualscroller__WEBPACK_IMPORTED_MODULE_88__["VirtualScrollerModule"], _app_code_component__WEBPACK_IMPORTED_MODULE_89__["AppCodeModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_90__["AppComponent"], _app_main_component__WEBPACK_IMPORTED_MODULE_91__["AppMainComponent"], _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"], _app_config_component__WEBPACK_IMPORTED_MODULE_92__["AppConfigComponent"], _app_menu_component__WEBPACK_IMPORTED_MODULE_93__["AppMenuComponent"], _app_menuitem_component__WEBPACK_IMPORTED_MODULE_94__["AppMenuitemComponent"], _app_rightpanel_component__WEBPACK_IMPORTED_MODULE_95__["AppRightPanelComponent"], _app_breadcrumb_component__WEBPACK_IMPORTED_MODULE_96__["AppBreadcrumbComponent"], _app_topbar_component__WEBPACK_IMPORTED_MODULE_97__["AppTopBarComponent"], _app_footer_component__WEBPACK_IMPORTED_MODULE_98__["AppFooterComponent"], _demo_view_dashboarddemo_component__WEBPACK_IMPORTED_MODULE_99__["DashboardDemoComponent"], _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_100__["FormLayoutDemoComponent"], _demo_view_pablo_by_people_pablo_by_people_component__WEBPACK_IMPORTED_MODULE_141__["PabloByPeopleComponent"], _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_101__["FloatLabelDemoComponent"], _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_102__["InvalidStateDemoComponent"], _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_103__["InputDemoComponent"], _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_104__["ButtonDemoComponent"], _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_105__["TableDemoComponent"], _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_106__["TreeDemoComponent"], _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_107__["PanelsDemoComponent"], _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_108__["OverlaysDemoComponent"], _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_109__["MediaDemoComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_142__["HomeComponent"], _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_110__["MenusDemoComponent"], _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_111__["MessagesDemoComponent"], _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_111__["MessagesDemoComponent"], _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_112__["MiscDemoComponent"], _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_114__["ChartsDemoComponent"], _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_113__["EmptyDemoComponent"], _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_115__["FileDemoComponent"], _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_116__["DocumentationComponent"], _utilities_display_component__WEBPACK_IMPORTED_MODULE_117__["DisplayComponent"], _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_118__["ElevationComponent"], _utilities_grid_component__WEBPACK_IMPORTED_MODULE_119__["GridComponent"], _utilities_icons_component__WEBPACK_IMPORTED_MODULE_120__["IconsComponent"], _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_121__["WidgetsComponent"], _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_122__["SpacingComponent"], _utilities_typography_component__WEBPACK_IMPORTED_MODULE_123__["TypographyComponent"], _utilities_text_component__WEBPACK_IMPORTED_MODULE_124__["TextComponent"], _pages_quizz_app_crud_component__WEBPACK_IMPORTED_MODULE_143__["AppCrudComponent"], _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_125__["AppTimelineDemoComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_139__["AppLoginComponent"], _pages_app_invoice_component__WEBPACK_IMPORTED_MODULE_126__["AppInvoiceComponent"], _pages_app_help_component__WEBPACK_IMPORTED_MODULE_127__["AppHelpComponent"], _pages_app_error_component__WEBPACK_IMPORTED_MODULE_128__["AppErrorComponent"], _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_129__["AppAccessdeniedComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
        }, _demo_service_countryservice__WEBPACK_IMPORTED_MODULE_130__["CountryService"], _demo_service_customerservice__WEBPACK_IMPORTED_MODULE_131__["CustomerService"], _demo_service_eventservice__WEBPACK_IMPORTED_MODULE_132__["EventService"], _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_133__["IconService"], _demo_service_nodeservice__WEBPACK_IMPORTED_MODULE_134__["NodeService"], _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_135__["PhotoService"], _demo_service_productservice__WEBPACK_IMPORTED_MODULE_136__["ProductService"], _app_menu_service__WEBPACK_IMPORTED_MODULE_137__["MenuService"], _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_138__["AppBreadcrumbService"], _demo_view_pablo_by_people_people_by_people_service__WEBPACK_IMPORTED_MODULE_140__["PabloByPeopleService"], _pages_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_90__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZmMs":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizz/app.crud.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZmMs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<p-toast></p-toast>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<p-toolbar styleClass=\"p-mb-4\">\r\n\t\t\t\t<ng-template pTemplate=\"left\">\r\n\t\t\t\t\t<h4>Quizz</h4>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<ng-template pTemplate=\"right\">\r\n\t\t\t\t\t<button pButton pRipple label=\"Play\" value=\"{{buttonname}}\" icon=\"pi pi-play\"\r\n\t\t\t\t\t\tclass=\"p-button-help p-mb-2\" *ngIf=\"!start\" (click)=\"startQuiz()\"></button>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-toolbar>\r\n\t\t\t<div class=\"p-grid\">\r\n\t\t\t\t<div class=\"p-col-2\"></div>\r\n\t\t\t\t<div class=\"p-grid p-col-8\">\r\n\t\t\t\t\t<div class=\"card p-col-4\" *ngIf=\"start\"></div>\r\n\t\t\t\t\t<div class=\"card p-col-8\" *ngIf=\"start\">\r\n\t\t\t\t\t\t<h5>{{currentQuestionSet.question}}</h5>\r\n\t\t\t\t\t\t<div *ngFor=\"let o of currentQuestionSet.option\">\r\n\t\t\t\t\t\t\t<label style=\"cursor: pointer; color: white;\">\r\n\t\t\t\t\t\t\t\t<input type=\"radio\" class=\"questions\" name=\"{{currentQuestionSet.id}}\" id=\"question\"\r\n\t\t\t\t\t\t\t\t\tvalue=\"{{o.optionid}}\" [(ngModel)]=\"currentQuestionSet.selected\" />\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t{{o.name}}\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<p-toolbar styleClass=\"p-mb-4\" *ngIf=\"start\">\r\n\t\t\t\t<ng-template pTemplate=\"left\">\r\n\t\t\t\t\t<h5>{{currentIndex+1}}/{{questions.length}}</h5>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<div style=\"float: right;\">\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-template pTemplate=\"right\">\r\n\t\t\t\t\t<button pButton pRipple label=\"Next\" value=\"Next\" icon=\"pi pi-angle-right\"\r\n\t\t\t\t\t\tclass=\"p-button-help p-mb-2\" *ngIf=\"(currentIndex+1) != questions.length\" (click)=\"next()\">\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button pButton pRipple label=\"Submit\" value=\"Submit\" icon=\"pi pi-check\" class=\"p-button-primary\"\r\n\t\t\t\t\t\t(click)=\"submit()\" *ngIf=\"(currentIndex+1) == questions.length\">\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-toolbar>\r\n\r\n\t\t\t<div *ngIf=\"gameover\" style=\"margin: auto; text-align: center; padding-bottom: 1%;\">\r\n\t\t\t\t<h5>Resultado: {{correct}}/{{questions.length}}</h5>\r\n\t\t\t\t<div *ngIf=\"correct <= 3\">\r\n\t\t\t\t\t<p>Parece q você não conhece nem um pouquinho o Pablo hein... :/</p>\r\n\t\t\t\t\t<img src=\"./../../../assets/demo/images/quiz/sad.webp\" alt=\"\" width=\"300px\"\r\n\t\t\t\t\t\tstyle=\"border-radius: 15px;\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<img *ngIf=\"correct > 3 && correct < 6\" src=\"./../../../assets/demo/images/avatar/amyelsner.png\" alt=\"\"\r\n\t\t\t\t\twidth=\"300px\" style=\"border-radius: 15px;\">\r\n\t\t\t\t\t\r\n\t\t\t\t<div *ngIf=\"correct >= 6 && correct < 10\">\r\n\t\t\t\t\t<p>É até que você conhece o pablo :p</p>\r\n\t\t\t\t\t<img *ngIf=\"correct >= 6 && correct < 10\" src=\"./../../../assets/demo/images/quiz/okay.jpg\" alt=\"\"\r\n\t\t\t\t\t\twidth=\"300px\" style=\"border-radius: 15px;\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <img src=\"./../../../assets/demo/images/avatar/amyelsner.png\" alt=\"\"> -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<style>\r\n\t.questions {\r\n\t\twidth: 10px;\r\n\t}\r\n</style>";
      /***/
    },

    /***/
    "ZnEj":
    /*!***************************************!*\
      !*** ./src/app/app.code.component.ts ***!
      \***************************************/

    /*! exports provided: AppCodeComponent, AppCodeModule */

    /***/
    function ZnEj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCodeComponent", function () {
        return AppCodeComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppCodeModule", function () {
        return AppCodeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _app_code_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.code.component.scss */
      "rI0q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppCodeComponent = /*#__PURE__*/function () {
        function AppCodeComponent(el) {
          _classCallCheck(this, AppCodeComponent);

          this.el = el;
          this.lang = 'markup';
        }

        _createClass(AppCodeComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (window['Prism']) {
              window['Prism'].highlightElement(this.codeViewChild.nativeElement);
            }
          }
        }]);

        return AppCodeComponent;
      }();

      AppCodeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      AppCodeComponent.propDecorators = {
        lang: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        codeViewChild: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['code']
        }]
      };
      AppCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-code',
        template: "\n        <pre [ngClass]=\"'language-' + lang\"><code #code><ng-content></ng-content>\n</code></pre>\n    ",
        styles: [_app_code_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], AppCodeComponent);

      var AppCodeModule = function AppCodeModule() {
        _classCallCheck(this, AppCodeModule);
      };

      AppCodeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        exports: [AppCodeComponent],
        declarations: [AppCodeComponent]
      })], AppCodeModule);
      /***/
    },

    /***/
    "Znji":
    /*!************************************************!*\
      !*** ./src/app/utilities/display.component.ts ***!
      \************************************************/

    /*! exports provided: DisplayComponent */

    /***/
    function Znji(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
        return DisplayComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_display_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./display.component.html */
      "xE+y");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../demo/service/photoservice */
      "xLnY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DisplayComponent = /*#__PURE__*/function () {
        function DisplayComponent(breadcrumbService, photoService) {
          _classCallCheck(this, DisplayComponent);

          this.breadcrumbService = breadcrumbService;
          this.photoService = photoService;
          this.galleriaResponsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 5
          }, {
            breakpoint: '960px',
            numVisible: 4
          }, {
            breakpoint: '768px',
            numVisible: 3
          }, {
            breakpoint: '560px',
            numVisible: 1
          }];
          this.breadcrumbService.setItems([{
            label: 'Media'
          }, {
            label: 'Photos',
            routerLink: ['/utilities/display']
          }]);
        }

        _createClass(DisplayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.photoService.getImages().then(function (images) {
              _this18.images = images;
            });
          }
        }]);

        return DisplayComponent;
      }();

      DisplayComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_2__["AppBreadcrumbService"]
        }, {
          type: _demo_service_photoservice__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
        }];
      };

      DisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_display_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DisplayComponent);
      /***/
    },

    /***/
    "a6dQ":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/documentation.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function a6dQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card docs\">\r\n\r\n            <h4>Current Version</h4>\r\n            <p>Angular 11 and PrimeNG 11</p>\r\n\r\n            <h4>Dependencies</h4>\r\n            <p>Poseidon has no direct dependency. More information about dependencies is available at <a href=\"https://www.primefaces.org/why-primeng-templates/\">Why PrimeNG Templates</a> article.</p>\r\n\r\n            <h4>Getting Started</h4>\r\n            <p>Poseidon is a true native application template for Angular and is distributed as a CLI project. In case CLI is not installed already, use the command below to set it up.</p>\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\r\nnpm install -g @angular-cli\r\n</app-code>\r\n\r\n            <p>Once CLI is ready in your system, extract the contents of the Poseidon zip file distribution, cd to the directory,\r\n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment at http://localhost:4200/.</p>\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\r\ncd poseidon\r\nnpm install\r\nng serve\r\n</app-code>\r\n\r\n            <p>That's it, you may now start with the development of your application.</p>\r\n\r\n            <h4>Important CLI Commands</h4>\r\n            <p>Following commands are derived from CLI.</p>\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\r\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\r\n\r\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\r\n\r\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\r\n\r\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\r\n\r\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\r\n\r\nRun 'ng help' for more options.\r\n</app-code>\r\n\r\n            <h4>Structure</h4>\r\n            <p>Poseidon consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout,\r\n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder.\r\n            </p>\r\n\r\n            <h4>Template</h4>\r\n            <p>Main layout is the html view of the app.component.ts, it is divided into a couple of sections such as topbar, right panel, menu and footer. Here is the code for\r\n                the main template. The component class app.main.component.ts implements the logic such as opening menus, layout modes and so on.\r\n            </p>\r\n<app-code ngPreserveWhitespaces ngNonBindable>\r\n&lt;div class=&quot;layout-wrapper&quot; [ngClass]=&quot;&#123;'p-input-filled': app.inputStyle === 'filled', 'p-ripple-disabled': !app.ripple,\r\n    'layout-static': isStatic(),\r\n    'layout-overlay': isOverlay(),\r\n    'layout-overlay-active': overlayMenuActive &amp;&amp; isOverlay(),\r\n    'layout-horizontal': isHorizontal(),\r\n    'layout-static-active': !staticMenuDesktopInactive &amp;&amp; isStatic(),\r\n    'layout-mobile-active': staticMenuMobileActive,\r\n    'layout-rtl': app.isRTL,\r\n    'layout-rightpanel-active': rightPanelActive&#125;&quot; [class]=&quot;'layout-menu-'+ app.menuTheme+ ' layout-topbar-'+ app.topbarTheme&quot;&gt;\r\n\r\n    &lt;app-topbar&gt;&lt;/app-topbar&gt;\r\n\r\n    &lt;app-rightpanel&gt;&lt;/app-rightpanel&gt;\r\n\r\n    &lt;div class=&quot;menu-wrapper&quot; (click)=&quot;onMenuClick($event)&quot;&gt;\r\n        &lt;div class=&quot;layout-menu-container&quot;&gt;\r\n            &lt;app-menu&gt;&lt;/app-menu&gt;\r\n        &lt;/div&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;div class=&quot;layout-main&quot;&gt;\r\n        &lt;app-breadcrumb&gt;&lt;/app-breadcrumb&gt;\r\n\r\n        &lt;div class=&quot;layout-content&quot;&gt;\r\n            &lt;router-outlet&gt;&lt;/router-outlet&gt;\r\n        &lt;/div&gt;\r\n\r\n        &lt;app-footer&gt;&lt;/app-footer&gt;\r\n    &lt;/div&gt;\r\n\r\n    &lt;app-config&gt;&lt;/app-config&gt;\r\n\r\n    &lt;div *ngIf=&quot;staticMenuMobileActive&quot; class=&quot;layout-mask modal-in&quot;&gt;&lt;/div&gt;\r\n\r\n&lt;/div&gt;\r\n</app-code>\r\n\r\n            <h4>Menu</h4>\r\n            <p>Menu is a separate component defined in app.menu.component.ts file based on PrimeNG MenuModel API. In order to define the menuitems,\r\n            navigate to menu.component.ts and define your own model. Here is the menu component from the sample application.</p>\r\n<div style=\"height:400px;overflow: auto;\">\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\r\nimport &#123;Component,OnInit&#125; from '@angular/core';\r\nimport &#123;AppMainComponent&#125; from './app.component';\r\n\r\n@Component(&#123;\r\n    selector: 'app-menu',\r\n    template: `\r\n        &lt;ul class=\"layout-menu\"&gt;\r\n            &lt;li app-menuitem *ngFor=\"let item of model; let i = index;\" [item]=\"item\" [index]=\"i\" [root]=\"true\"&gt;&lt;/li&gt;\r\n        &lt;/ul&gt;\r\n    `\r\n&#125;)\r\nexport class AppMenuComponent implements OnInit &#123;\r\n\r\n\r\n    export class AppMenuComponent implements OnInit &#123;\r\n\r\n    model: any[];\r\n\r\n    constructor(public app: AppComponent) &#123;&#125;\r\n\r\n    ngOnInit() &#123;\r\n        this.model = [\r\n            &#123;\r\n                label: 'Favorites', icon: 'pi pi-fw pi-home',\r\n                items: [\r\n                    &#123;label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/']&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'UI Kit', icon: 'pi pi-fw pi-star', routerLink: ['/uikit'],\r\n                items: [\r\n                    &#123;label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']&#125;,\r\n                    &#123;label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']&#125;,\r\n                    &#123;label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']&#125;,\r\n                    &#123;label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']&#125;,\r\n                    &#123;label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'&#125;,\r\n                    &#123;label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']&#125;,\r\n                    &#123;label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']&#125;,\r\n                    &#123;label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']&#125;,\r\n                    &#123;label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']&#125;,\r\n                    &#123;label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']&#125;,\r\n                    &#123;label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']&#125;,\r\n                    &#123;label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu']&#125;,\r\n                    &#123;label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']&#125;,\r\n                    &#123;label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']&#125;,\r\n                    &#123;label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']&#125;,\r\n                    &#123;label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['utilities'],\r\n                items: [\r\n                    &#123;label: 'Display', icon: 'pi pi-fw pi-desktop', routerLink: ['utilities/display']&#125;,\r\n                    &#123;label: 'Elevation', icon: 'pi pi-fw pi-external-link', routerLink: ['utilities/elevation']&#125;,\r\n                    &#123;label: 'FlexBox', icon: 'pi pi-fw pi-directions', routerLink: ['utilities/flexbox']&#125;,\r\n                    &#123;label: 'Icons', icon: 'pi pi-fw pi-search', routerLink: ['utilities/icons']&#125;,\r\n                    &#123;label: 'Text', icon: 'pi pi-fw pi-pencil', routerLink: ['utilities/text']&#125;,\r\n                    &#123;label: 'Widgets', icon: 'pi pi-fw pi-star-o', routerLink: ['utilities/widgets']&#125;,\r\n                    &#123;label: 'Grid System', icon: 'pi pi-fw pi-th-large', routerLink: ['utilities/grid']&#125;,\r\n                    &#123;label: 'Spacing', icon: 'pi pi-fw pi-arrow-right', routerLink: ['utilities/spacing']&#125;,\r\n                    &#123;label: 'Typography', icon: 'pi pi-fw pi-align-center', routerLink: ['utilities/typography']&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],\r\n                items: [\r\n                    &#123;label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']&#125;,\r\n                    &#123;label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']&#125;,\r\n                    &#123;label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']&#125;,\r\n                    &#123;label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'&#125;,\r\n                    &#123;label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']&#125;,\r\n                    &#123;label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice']&#125;,\r\n                    &#123;label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help']&#125;,\r\n                    &#123;label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error']&#125;,\r\n                    &#123;label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound']&#125;,\r\n                    &#123;label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access']&#125;,\r\n                    &#123;label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty']&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',\r\n                        items: [\r\n                            &#123;\r\n                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left'&#125;,\r\n                                    &#123;label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left'&#125;,\r\n                                    &#123;label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left'&#125;,\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left'&#125;\r\n                                ]\r\n                            &#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',\r\n                        items: [\r\n                            &#123;\r\n                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left'&#125;,\r\n                                    &#123;label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left'&#125;,\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left'&#125;,\r\n                                ]\r\n                            &#125;,\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Start', icon: 'pi pi-fw pi-download',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']\r\n                    &#125;\r\n                ]\r\n            &#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</app-code>\r\n</div>\r\n\r\n            <h4>Integration with an Existing CLI Project</h4>\r\n            <p>To setup Poseidon in an existing project, copy the <i>src/assets</i> folder to your projects folder with the same name\r\n                and replace the contents of app.component.ts, app.component.html with their counterparts in Poseidon under <i>src/app</i> folder.</p>\r\n\r\n            <p>Install PrimeNG</p>\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\r\nnpm install primeng@latest --save\r\nnpm install primeicons@latest --save\r\n</app-code>\r\n\r\n            <p>Add PrimeNG CSS at styles section in angular.json.</p>\r\n\r\n <app-code ngPreserveWhitespaces ngNonBindable lang=\"json\">\r\n\"styles\": [\r\n    \"styles.scss\"      //your styles and overrides\r\n],\r\n</app-code>\r\n\r\n            <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\r\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration so they go inside the bundle.</p>\r\n\r\n            <h4>Theme</h4>\r\n            <p>Poseidon provides 36 PrimeNG themes out of the box, setup of a theme simple including the css of theme to your page that are located inside assets/theme folder such as assets/theme/theme-amber.</p>\r\n\r\n            <ul>\r\n                <li>theme-amber-dark</li>\r\n                <li>theme-amber-dim</li>\r\n                <li>theme-amber-light</li>\r\n                <li>theme-amethyst-dark</li>\r\n                <li>theme-amethyst-dim</li>\r\n                <li>theme-amethyst-light</li>\r\n                <li>theme-apple-dark</li>\r\n                <li>theme-apple-dim</li>\r\n                <li>theme-apple-light</li>\r\n                <li>theme-camelot-dark</li>\r\n                <li>theme-camelot-dim</li>\r\n                <li>theme-camelot-light</li>\r\n                <li>theme-cape-palliser-dark</li>\r\n                <li>theme-cape-palliser-dim</li>\r\n                <li>theme-cape-palliser-light</li>\r\n                <li>theme-cyan-dark</li>\r\n                <li>theme-cyan-dim</li>\r\n                <li>theme-cyan-light</li>\r\n                <li>theme-denim-dark</li>\r\n                <li>theme-denim-dim</li>\r\n                <li>theme-denim-light</li>\r\n                <li>theme-gigas-dark</li>\r\n                <li>theme-gigas-dim</li>\r\n                <li>theme-gigas-light</li>\r\n                <li>theme-jungle-green-dark</li>\r\n                <li>theme-jungle-green-dim</li>\r\n                <li>theme-jungle-green-light</li>\r\n                <li>theme-sea-green-dark</li>\r\n                <li>theme-sea-green-dim</li>\r\n                <li>theme-sea-green-light</li>\r\n                <li>theme-tapestry-dark</li>\r\n                <li>theme-tapestry-dim</li>\r\n                <li>theme-tapestry-light</li>\r\n                <li>theme-wegewood-dark</li>\r\n                <li>theme-wegewood-dim</li>\r\n                <li>theme-wegewood-light</li>\r\n            </ul>\r\n\r\n            <p>A custom theme can be developed by the following steps.</p>\r\n            <ul>\r\n                <li>Choose a custom theme name such as theme-myown.</li>\r\n                <li>Create a file named theme-myown.scss under <i>assets/theme folder</i>.</li>\r\n                <li>Define the variables listed below and import the <i>/sass/theme/_theme.scss</i> file.</li>\r\n                <li>Build the scss to generate css</li>\r\n                <li>Include the generated theme.css to your page.</li>\r\n            </ul>\r\n\r\n            <p>Here are the variables required to create a theme, you may need to change the last line according to the\r\n                relative path of the sass folder in your application.</p>\r\n\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\r\n$primaryLightColor: #4D9FDC;\r\n$primaryColor: #1B74C5;\r\n$primaryDarkColor: #135AA9;\r\n$primaryDarkerColor: #0D438D;\r\n$primaryTextColor: #f8fafc;\r\n\r\n$highlightBg: $primaryColor;\r\n$highlightTextColor: $primaryTextColor;\r\n\r\n@import '../../sass/theme/_theme_light';\r\n</app-code>\r\n\r\n            <p> An example sass command to compile the css would be;</p>\r\n\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\r\nsass src/assets/theme-myown/theme.scss src/assets/theme-myown/theme.css\r\n</app-code>\r\n\r\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\r\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"markup\">\r\nsass --watch src/assets:src/assets --no-source-map\r\n</app-code>\r\n\r\n            <p>Same can also be applied to layout itself;</p>\r\n            <ul>\r\n                <li>Choose a layout name such as layout-myown.</li>\r\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\r\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\r\n                <li>Build the scss to generate css</li>\r\n                <li>Serve the css by importing it using a link tag or a bundler.</li>\r\n            </ul>\r\n\r\n            <p>Here are the variables required to create a layout, you may need to change the last line according to the\r\n                relative path of the sass folder in your application.</p>\r\n\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\r\n$primaryColor:#2c84d8;\r\n$primaryLightColor:#3B92E5;\r\n$primaryTextColor:#ffffff;\r\n\r\n@import '../../sass/variables/layout/_layout_light';\r\n@import '../../sass/layout/_layout';\r\n</app-code>\r\n\r\n            <p>For both cases, several .scss files such as _layout.scss, _theme.scss or _variables.scss has to be present relative to your scss files, these are available inside the assets/sass folder in the distribution.</p>\r\n            <p>In case you'd like to customize the structure not just the colors, the _variables.scss is where the structural variables (e.g. font size, paddings) for the layout are defined.</p>\r\n<h5>sass/variables/layout/_layout_common.scss</h5>\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\r\n//general\r\n$fontSize:14px !default;\r\n$fontFamily: 'Open Sans' !default;\r\n$mobileBreakpoint:991px !default;\r\n$borderRadius:5px !default;\r\n$animationDuration:.2s !default;\r\n$animationTimingFunction:cubic-bezier(.05,.74,.2,.99) !default;\r\n$letterSpacing:normal !default;\r\n$transitionDuration:.2s !default;\r\n$tabletBreakpoint:991px !default;\r\n$phoneBreakpoint:576px !default;\r\n</app-code>\r\n\r\n<h5>sass/variables/theme/_theme_light.scss</h5>\r\n<div style=\"height:400px;overflow: auto;\">\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"css\">\r\n//reused color variables\r\n$shade000:#FDFEFF !default;    //surface\r\n$shade100:#F6F9FE !default;    //header background\r\n$shade200:rgba(#E8F1F8,.7) !default;    //hover background\r\n$shade300:#E4E5E5 !default;    //border, divider\r\n$shade400:#D7D8D9 !default;    //input border\r\n$shade500:#515C66 !default;    //input icon\r\n$shade600:#657380 !default;    //text secondary color\r\n$shade700:#515C66 !default;    //text color\r\n$shade800:#3B475F !default;    //unused\r\n$shade900:#252F44 !default;    //unused\r\n\r\n//global\r\n$fontFamily:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\" !default;\r\n$fontSize:1rem !default;\r\n$fontWeight:normal !default;\r\n$textColor:$shade700 !default;\r\n$textSecondaryColor:$shade600 !default;\r\n$borderRadius:3px !default;\r\n$transitionDuration:.2s !default;\r\n$formElementTransition:background-color $transitionDuration, color $transitionDuration, border-color $transitionDuration, box-shadow $transitionDuration !default;\r\n$actionIconTransition:background-color $transitionDuration, color $transitionDuration, box-shadow $transitionDuration !default;\r\n$listItemTransition:box-shadow $transitionDuration !default;\r\n$primeIconFontSize:1rem !default;\r\n$divider:1px solid $shade300 !default;\r\n$inlineSpacing:.5rem !default;\r\n$disabledOpacity:.6 !default;\r\n$maskBg:rgba(0, 0, 0, 0.4) !default;\r\n$loadingIconFontSize:2rem !default;\r\n$errorColor:#f44336 !default;\r\n\r\n//scale\r\n$scaleSM:0.875 !default;\r\n$scaleLG:1.25 !default;\r\n\r\n//focus\r\n$focusOutlineColor:$primaryLightColor !default;\r\n$focusOutline:0 none !default;\r\n$focusOutlineOffset:0 !default;\r\n$focusShadow:0 0 0 0.2rem $focusOutlineColor !default;\r\n\r\n//action icons\r\n$actionIconWidth:2rem !default;\r\n$actionIconHeight:2rem !default;\r\n$actionIconBg:transparent !default;\r\n$actionIconBorder:0 none !default;\r\n$actionIconColor:$shade600 !default;\r\n$actionIconHoverBg:$shade200 !default;\r\n$actionIconHoverBorderColor:transparent !default;\r\n$actionIconHoverColor:$shade700 !default;\r\n$actionIconBorderRadius:50% !default;\r\n\r\n//input field (e.g. inputtext, spinner, inputmask)\r\n$inputPadding:.5rem .5rem !default;\r\n$inputTextFontSize:1rem !default;\r\n\r\n$inputBg:$shade000 !default;\r\n$inputTextColor:$shade700 !default;\r\n$inputIconColor:$shade600 !default;\r\n$inputBorder:1px solid $shade400 !default;\r\n$inputHoverBorderColor:$primaryColor !default;\r\n$inputFocusBorderColor:$primaryColor !default;\r\n$inputErrorBorderColor:$errorColor !default;\r\n$inputPlaceholderTextColor:$shade600 !default;\r\n$inputFilledBg:$shade100 !default;\r\n$inputFilledHoverBg:$inputFilledBg !default;\r\n$inputFilledFocusBg:$shade000 !default;\r\n\r\n//input groups\r\n$inputGroupBg:$shade200 !default;\r\n$inputGroupTextColor:$shade600 !default;\r\n$inputGroupAddOnMinWidth:2.357rem !default;\r\n\r\n//input lists (e.g. dropdown, autocomplete, multiselect, orderlist)\r\n$inputListBg:$shade000 !default;\r\n$inputListTextColor:$shade700 !default;\r\n$inputListBorder:$inputBorder !default;\r\n$inputListPadding:.5rem 0 !default;\r\n$inputListItemPadding:.5rem 1rem !default;\r\n$inputListItemBg:transparent !default;\r\n$inputListItemTextColor:$shade700 !default;\r\n$inputListItemHoverBg:$shade200 !default;\r\n$inputListItemTextHoverColor:$shade700 !default;\r\n$inputListItemBorder:0 none !default;\r\n$inputListItemBorderRadius:0 !default;\r\n$inputListItemMargin:0 !default;\r\n$inputListItemFocusShadow:inset 0 0 0 0.15rem $focusOutlineColor !default;\r\n$inputListHeaderPadding:.5rem 1rem !default;\r\n$inputListHeaderMargin:0 !default;\r\n$inputListHeaderBg:$shade100 !default;\r\n$inputListHeaderTextColor:$shade700 !default;\r\n$inputListHeaderBorder:0 none !default;\r\n\r\n//inputs with overlays (e.g. autocomplete, dropdown, multiselect)\r\n$inputOverlayBg:$inputListBg !default;\r\n$inputOverlayHeaderBg:$inputListHeaderBg !default;\r\n$inputOverlayBorder:0 none !default;\r\n$inputOverlayShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;\r\n\r\n//button\r\n$buttonPadding:.5rem 1rem !default;\r\n$buttonIconOnlyWidth:2.357rem !default;\r\n$buttonIconOnlyPadding:.5rem 0 !default;\r\n$buttonBg:$primaryColor !default;\r\n$buttonTextColor:$primaryTextColor !default;\r\n$buttonBorder:1px solid $primaryColor !default;\r\n$buttonHoverBg:$primaryDarkColor !default;\r\n$buttonTextHoverColor:$primaryTextColor !default;\r\n$buttonHoverBorderColor:$primaryDarkColor !default;\r\n$buttonActiveBg:$primaryDarkerColor !default;\r\n$buttonTextActiveColor:$primaryTextColor !default;\r\n$buttonActiveBorderColor:$primaryDarkerColor !default;\r\n$raisedButtonShadow:0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12) !default;\r\n$roundedButtonBorderRadius:2rem !default;\r\n\r\n$textButtonHoverBgOpacity:.04 !default;\r\n$textButtonActiveBgOpacity:.16 !default;\r\n$outlinedButtonBorder:1px solid !default;\r\n$plainButtonTextColor:$textSecondaryColor !default;\r\n$plainButtonHoverBgColor:$shade200 !default;\r\n$plainButtonActiveBgColor:$shade300 !default;\r\n\r\n$secondaryButtonBg:#607D8B !default;\r\n$secondaryButtonTextColor:#ffffff !default;\r\n$secondaryButtonBorder:1px solid $secondaryButtonBg !default;\r\n$secondaryButtonHoverBg:scale-color($secondaryButtonBg, $lightness: -10%) !default;\r\n$secondaryButtonTextHoverColor:$secondaryButtonTextColor !default;\r\n$secondaryButtonHoverBorderColor:scale-color($secondaryButtonBg, $lightness: -10%) !default;\r\n$secondaryButtonActiveBg:scale-color($secondaryButtonBg, $lightness: -20%) !default;\r\n$secondaryButtonTextActiveColor:$secondaryButtonTextColor !default;\r\n$secondaryButtonActiveBorderColor:scale-color($secondaryButtonBg, $lightness: -20%) !default;\r\n$secondaryButtonFocusShadow:0 0 0 0.2rem scale-color($secondaryButtonBg, $lightness: 60%) !default;\r\n\r\n$infoButtonBg:#0288D1 !default;\r\n$infoButtonTextColor:#ffffff !default;\r\n$infoButtonBorder:1px solid $infoButtonBg !default;\r\n$infoButtonHoverBg:scale-color($infoButtonBg, $lightness: -10%) !default;\r\n$infoButtonTextHoverColor:$infoButtonTextColor !default;\r\n$infoButtonHoverBorderColor:scale-color($infoButtonBg, $lightness: -10%) !default;\r\n$infoButtonActiveBg:scale-color($infoButtonBg, $lightness: -20%) !default;\r\n$infoButtonTextActiveColor:$infoButtonTextColor !default;\r\n$infoButtonActiveBorderColor:scale-color($infoButtonBg, $lightness: -20%) !default;\r\n$infoButtonFocusShadow:0 0 0 0.2rem scale-color($infoButtonBg, $lightness: 60%) !default;\r\n\r\n$successButtonBg:#689F38 !default;\r\n$successButtonTextColor:#ffffff !default;\r\n$successButtonBorder:1px solid $successButtonBg !default;\r\n$successButtonHoverBg:scale-color($successButtonBg, $lightness: -10%) !default;\r\n$successButtonTextHoverColor:$successButtonTextColor !default;\r\n$successButtonHoverBorderColor:scale-color($successButtonBg, $lightness: -10%) !default;\r\n$successButtonActiveBg:scale-color($successButtonBg, $lightness: -20%) !default;\r\n$successButtonTextActiveColor:$successButtonTextColor !default;\r\n$successButtonActiveBorderColor:scale-color($successButtonBg, $lightness: -20%) !default;\r\n$successButtonFocusShadow:0 0 0 0.2rem scale-color($successButtonBg, $lightness: 60%) !default;\r\n\r\n$warningButtonBg:#FBC02D !default;\r\n$warningButtonTextColor:#212529 !default;\r\n$warningButtonBorder:1px solid $warningButtonBg !default;\r\n$warningButtonHoverBg:scale-color($warningButtonBg, $lightness: -10%) !default;\r\n$warningButtonTextHoverColor:$warningButtonTextColor !default;\r\n$warningButtonHoverBorderColor:scale-color($warningButtonBg, $lightness: -10%) !default;\r\n$warningButtonActiveBg:scale-color($warningButtonBg, $lightness: -20%) !default;\r\n$warningButtonTextActiveColor:$warningButtonTextColor !default;\r\n$warningButtonActiveBorderColor:scale-color($warningButtonBg, $lightness: -20%) !default;\r\n$warningButtonFocusShadow:0 0 0 0.2rem scale-color($warningButtonBg, $lightness: 60%) !default;\r\n\r\n$helpButtonBg:#9C27B0 !default;\r\n$helpButtonTextColor:#ffffff !default;\r\n$helpButtonBorder:1px solid $helpButtonBg !default;\r\n$helpButtonHoverBg:scale-color($helpButtonBg, $lightness: -10%) !default;\r\n$helpButtonTextHoverColor:$helpButtonTextColor !default;\r\n$helpButtonHoverBorderColor:scale-color($helpButtonBg, $lightness: -10%) !default;\r\n$helpButtonActiveBg:scale-color($helpButtonBg, $lightness: -20%) !default;\r\n$helpButtonTextActiveColor:$helpButtonTextColor !default;\r\n$helpButtonActiveBorderColor:scale-color($helpButtonBg, $lightness: -20%) !default;\r\n$helpButtonFocusShadow:0 0 0 0.2rem scale-color($helpButtonBg, $lightness: 60%) !default;\r\n\r\n$dangerButtonBg:#D32F2F !default;\r\n$dangerButtonTextColor:#ffffff !default;\r\n$dangerButtonBorder:1px solid $dangerButtonBg !default;\r\n$dangerButtonHoverBg:scale-color($dangerButtonBg, $lightness: -10%) !default;\r\n$dangerButtonTextHoverColor:$dangerButtonTextColor !default;\r\n$dangerButtonHoverBorderColor:scale-color($dangerButtonBg, $lightness: -10%) !default;\r\n$dangerButtonActiveBg:scale-color($dangerButtonBg, $lightness: -20%) !default;\r\n$dangerButtonTextActiveColor:$dangerButtonTextColor !default;\r\n$dangerButtonActiveBorderColor:scale-color($dangerButtonBg, $lightness: -20%) !default;\r\n$dangerButtonFocusShadow:0 0 0 0.2rem scale-color($dangerButtonBg, $lightness: 60%) !default;\r\n\r\n$linkButtonColor:$primaryDarkerColor !default;\r\n$linkButtonHoverColor:$primaryDarkerColor !default;\r\n$linkButtonTextHoverDecoration:underline !default;\r\n$linkButtonFocusShadow:0 0 0 0.2rem $focusOutlineColor !default;\r\n\r\n//checkbox\r\n$checkboxWidth:20px !default;\r\n$checkboxHeight:20px !default;\r\n$checkboxBorder:2px solid $shade400 !default;\r\n$checkboxIconFontSize:14px !default;\r\n$checkboxActiveBorderColor:$primaryColor !default;\r\n$checkboxActiveBg:$primaryColor !default;\r\n$checkboxIconActiveColor:$primaryTextColor !default;\r\n$checkboxActiveHoverBg:$primaryDarkerColor !default;\r\n$checkboxIconActiveHoverColor:$primaryTextColor !default;\r\n$checkboxActiveHoverBorderColor:$primaryDarkerColor !default;\r\n\r\n//radiobutton\r\n$radiobuttonWidth:20px !default;\r\n$radiobuttonHeight:20px !default;\r\n$radiobuttonBorder:2px solid $shade400 !default;\r\n$radiobuttonIconSize:12px !default;\r\n$radiobuttonActiveBorderColor:$primaryColor !default;\r\n$radiobuttonActiveBg:$primaryColor !default;\r\n$radiobuttonIconActiveColor:$primaryTextColor !default;\r\n$radiobuttonActiveHoverBg:$primaryDarkerColor !default;\r\n$radiobuttonIconActiveHoverColor:$primaryTextColor !default;\r\n$radiobuttonActiveHoverBorderColor:$primaryDarkerColor !default;\r\n\r\n//colorpicker\r\n$colorPickerPreviewWidth:2rem !default;\r\n$colorPickerPreviewHeight:2rem !default;\r\n$colorPickerBg:#323232 !default;\r\n$colorPickerBorderColor:#191919 !default;\r\n$colorPickerHandleColor:$shade000 !default;\r\n\r\n//togglebutton\r\n$toggleButtonBg:$inputBg !default;\r\n$toggleButtonBorder:1px solid $shade400 !default;\r\n$toggleButtonTextColor:$shade700 !default;\r\n$toggleButtonIconColor:$shade600 !default;\r\n$toggleButtonHoverBg:$shade200 !default;\r\n$toggleButtonHoverBorderColor:$shade400 !default;\r\n$toggleButtonTextHoverColor:$shade700 !default;\r\n$toggleButtonIconHoverColor:$shade600 !default;\r\n$toggleButtonActiveBg:$primaryColor !default;\r\n$toggleButtonActiveBorderColor:$primaryColor !default;\r\n$toggleButtonTextActiveColor:$primaryTextColor !default;\r\n$toggleButtonIconActiveColor:$primaryTextColor !default;\r\n$toggleButtonActiveHoverBg:$primaryDarkColor !default;\r\n$toggleButtonActiveHoverBorderColor:$primaryDarkColor !default;\r\n$toggleButtonTextActiveHoverColor:$primaryTextColor !default;\r\n$toggleButtonIconActiveHoverColor:$primaryTextColor !default;\r\n\r\n//inplace\r\n$inplacePadding:$inputPadding !default;\r\n$inplaceHoverBg:$shade200 !default;\r\n$inplaceTextHoverColor:$shade700 !default;\r\n\r\n//rating\r\n$ratingIconFontSize:1.143rem !default;\r\n$ratingCancelIconColor:#e74c3c !default;\r\n$ratingCancelIconHoverColor:#c0392b !default;\r\n$ratingStarIconOffColor:$shade700 !default;\r\n$ratingStarIconOnColor:$primaryColor !default;\r\n$ratingStarIconHoverColor:$primaryColor !default;\r\n\r\n//slider\r\n$sliderBg:$shade300 !default;\r\n$sliderBorder:0 none !default;\r\n$sliderHorizontalHeight:.286rem !default;\r\n$sliderVerticalWidth:0.286rem !default;\r\n$sliderHandleWidth:1.143rem !default;\r\n$sliderHandleHeight:1.143rem !default;\r\n$sliderHandleBg:$shade000 !default;\r\n$sliderHandleBorder:2px solid $primaryColor !default;\r\n$sliderHandleBorderRadius:50% !default;\r\n$sliderHandleHoverBorderColor:$primaryColor !default;\r\n$sliderHandleHoverBg:$primaryColor !default;\r\n$sliderRangeBg:$primaryColor !default;\r\n\r\n//calendar\r\n$calendarTableMargin:.5rem 0 !default;\r\n$calendarPadding:.5rem !default;\r\n$calendarBg:$shade000 !default;\r\n$calendarInlineBg:$calendarBg !default;\r\n$calendarTextColor:$shade700 !default;\r\n$calendarBorder:$inputListBorder !default;\r\n$calendarOverlayBorder:$inputOverlayBorder !default;\r\n\r\n$calendarHeaderPadding:.5rem !default;\r\n$calendarHeaderBg:$shade000 !default;\r\n$calendarInlineHeaderBg:$calendarBg !default;\r\n$calendarHeaderBorder:1px solid $shade300 !default;\r\n$calendarHeaderTextColor:$shade700 !default;\r\n$calendarHeaderFontWeight:600 !default;\r\n$calendarHeaderCellPadding:.5rem !default;\r\n\r\n$calendarCellDatePadding:.5rem !default;\r\n$calendarCellDateWidth:2.5rem !default;\r\n$calendarCellDateHeight:2.5rem !default;\r\n$calendarCellDateBorderRadius:50% !default;\r\n$calendarCellDateBorder:1px solid transparent !default;\r\n$calendarCellDateHoverBg:$shade200 !default;\r\n$calendarCellDateTodayBg:$shade400 !default;\r\n$calendarCellDateTodayBorderColor:transparent !default;\r\n$calendarCellDateTodayTextColor:$shade700 !default;\r\n\r\n$calendarButtonBarPadding:1rem 0 !default;\r\n$calendarTimePickerPadding:.5rem !default;\r\n$calendarTimePickerElementPadding:0 .5rem !default;\r\n$calendarTimePickerTimeFontSize:1.25rem !default;\r\n\r\n$calendarBreakpoint:769px !default;\r\n$calendarCellDatePaddingSM:0 !default;\r\n\r\n//input switch\r\n$inputSwitchWidth:3rem !default;\r\n$inputSwitchHeight:1.75rem !default;\r\n$inputSwitchBorderRadius:30px !default;\r\n$inputSwitchHandleWidth:1.250rem !default;\r\n$inputSwitchHandleHeight:1.250rem !default;\r\n$inputSwitchHandleBorderRadius:50% !default;\r\n$inputSwitchSliderPadding:.25rem !default;\r\n$inputSwitchSliderOffBg:$shade400 !default;\r\n$inputSwitchHandleOffBg:$shade000 !default;\r\n$inputSwitchSliderOffHoverBg:scale-color($shade400, $lightness: -10%) !default;\r\n$inputSwitchSliderOnBg:$primaryColor !default;\r\n$inputSwitchSliderOnHoverBg:$primaryDarkColor !default;\r\n$inputSwitchHandleOnBg:$shade000 !default;\r\n\r\n//panel\r\n$panelHeaderBorder:1px solid $shade300 !default;\r\n$panelHeaderBg:$shade100 !default;\r\n$panelHeaderTextColor:$shade700 !default;\r\n$panelHeaderFontWeight:600 !default;\r\n$panelHeaderPadding:1rem !default;\r\n$panelToggleableHeaderPadding:.5rem 1rem !default;\r\n\r\n$panelHeaderHoverBg:$shade200 !default;\r\n$panelHeaderHoverBorderColor:$shade300 !default;\r\n$panelHeaderTextHoverColor:$shade700 !default;\r\n\r\n$panelContentBorder:1px solid $shade300 !default;\r\n$panelContentBg:$shade000 !default;\r\n$panelContentTextColor:$shade700 !default;\r\n$panelContentPadding:1rem !default;\r\n\r\n$panelFooterBorder:1px solid $shade300 !default;\r\n$panelFooterBg:$shade000 !default;\r\n$panelFooterTextColor:$shade700 !default;\r\n$panelFooterPadding:0.5rem 1rem !default;\r\n\r\n//accordion\r\n$accordionSpacing:0 !default;\r\n$accordionHeaderBorder:$panelHeaderBorder !default;\r\n$accordionHeaderBg:$panelHeaderBg !default;\r\n$accordionHeaderTextColor:$panelHeaderTextColor !default;\r\n$accordionHeaderFontWeight:$panelHeaderFontWeight !default;\r\n$accordionHeaderPadding:$panelHeaderPadding !default;\r\n\r\n$accordionHeaderHoverBg:$shade200 !default;\r\n$accordionHeaderHoverBorderColor:$shade300 !default;\r\n$accordionHeaderTextHoverColor:$shade700 !default;\r\n\r\n$accordionHeaderActiveBg:$panelHeaderBg !default;\r\n$accordionHeaderActiveBorderColor:$shade300 !default;\r\n$accordionHeaderTextActiveColor:$shade700 !default;\r\n\r\n$accordionHeaderActiveHoverBg:$shade200 !default;\r\n$accordionHeaderActiveHoverBorderColor:$shade300 !default;\r\n$accordionHeaderTextActiveHoverColor:$shade700 !default;\r\n\r\n$accordionContentBorder:$panelContentBorder !default;\r\n$accordionContentBg:$panelContentBg !default;\r\n$accordionContentTextColor:$panelContentTextColor !default;\r\n$accordionContentPadding:$panelContentPadding !default;\r\n\r\n//tabview\r\n$tabviewNavBorder:1px solid $shade300 !default;\r\n$tabviewNavBorderWidth:0 0 2px 0 !default;\r\n$tabviewNavBg:$shade000 !default;\r\n\r\n$tabviewHeaderSpacing:0 !default;\r\n$tabviewHeaderBorder:solid $shade300 !default;\r\n$tabviewHeaderBorderWidth:0 0 2px 0 !default;\r\n$tabviewHeaderBorderColor:transparent transparent $shade300 transparent !default;\r\n$tabviewHeaderBg:$shade000 !default;\r\n$tabviewHeaderTextColor:$shade600 !default;\r\n$tabviewHeaderFontWeight:$panelHeaderFontWeight !default;\r\n$tabviewHeaderPadding:$panelHeaderPadding !default;\r\n$tabviewHeaderMargin:0 0 -2px 0 !default;\r\n\r\n$tabviewHeaderHoverBg:$shade000 !default;\r\n$tabviewHeaderHoverBorderColor:$shade600 !default;\r\n$tabviewHeaderTextHoverColor:$shade600 !default;\r\n\r\n$tabviewHeaderActiveBg:$shade000 !default;\r\n$tabviewHeaderActiveBorderColor:$primaryColor !default;\r\n$tabviewHeaderTextActiveColor:$primaryColor !default;\r\n\r\n$tabviewContentBorder:0 none !default;\r\n$tabviewContentBg:$panelContentBg !default;\r\n$tabviewContentTextColor:$panelContentTextColor !default;\r\n$tabviewContentPadding:$panelContentPadding !default;\r\n\r\n//upload\r\n$fileUploadProgressBarHeight:.25rem !default;\r\n$fileUploadContentPadding:2rem 1rem !default;\r\n\r\n//scrollpanel\r\n$scrollPanelTrackBorder:0 none !default;\r\n$scrollPanelTrackBg:$shade100 !default;\r\n\r\n//card\r\n$cardBodyPadding:1rem !default;\r\n$cardTitleFontSize:1.5rem !default;\r\n$cardTitleFontWeight:700 !default;\r\n$cardSubTitleFontWeight:400 !default;\r\n$cardSubTitleColor:$shade600 !default;\r\n$cardContentPadding:1rem 0 !default;\r\n$cardFooterPadding:1rem 0 0 0 !default;\r\n$cardShadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12) !default;\r\n\r\n//editor\r\n$editorToolbarBg:$panelHeaderBg !default;\r\n$editorToolbarBorder:$panelHeaderBorder !default;\r\n$editorToolbarPadding:$panelHeaderPadding !default;\r\n$editorToolbarIconColor:$textSecondaryColor !default;\r\n$editorToolbarIconHoverColor:$textColor !default;\r\n$editorIconActiveColor:$primaryColor !default;\r\n$editorContentBorder:$panelContentBorder !default;\r\n$editorContentBg:$panelContentBg !default;\r\n\r\n//paginator\r\n$paginatorBg:$shade000 !default;\r\n$paginatorTextColor:$shade600 !default;\r\n$paginatorBorder:solid $shade200 !default;\r\n$paginatorBorderWidth:0 !default;\r\n$paginatorPadding:.5rem 1rem !default;\r\n$paginatorElementWidth:$buttonIconOnlyWidth !default;\r\n$paginatorElementHeight:$buttonIconOnlyWidth !default;\r\n$paginatorElementBg:transparent !default;\r\n$paginatorElementBorder:0 none !default;\r\n$paginatorElementIconColor:$shade600 !default;\r\n$paginatorElementHoverBg:$shade200 !default;\r\n$paginatorElementHoverBorderColor:transparent !default;\r\n$paginatorElementIconHoverColor:$shade700 !default;\r\n$paginatorElementBorderRadius:$borderRadius !default;\r\n$paginatorElementMargin:.143rem !default;\r\n$paginatorElementPadding:0 !default;\r\n\r\n//table\r\n$tableHeaderBorder:1px solid $shade200 !default;\r\n$tableHeaderBorderWidth:1px 0 1px 0 !default;\r\n$tableHeaderBg:$shade100 !default;\r\n$tableHeaderTextColor:$shade700 !default;\r\n$tableHeaderFontWeight:600 !default;\r\n$tableHeaderPadding:1rem 1rem !default;\r\n\r\n$tableHeaderCellPadding:1rem 1rem !default;\r\n$tableHeaderCellBg:$shade100 !default;\r\n$tableHeaderCellTextColor:$shade700 !default;\r\n$tableHeaderCellFontWeight:600 !default;\r\n$tableHeaderCellBorder:1px solid $shade200 !default;\r\n$tableHeaderCellBorderWidth:0 0 1px 0 !default;\r\n$tableHeaderCellHoverBg:$shade200 !default;\r\n$tableHeaderCellTextHoverColor:$shade700 !default;\r\n$tableHeaderCellIconColor:$shade600 !default;\r\n$tableHeaderCellIconHoverColor:$shade600 !default;\r\n$tableHeaderCellHighlightBg:$shade100 !default;\r\n$tableHeaderCellHighlightTextColor:$primaryColor !default;\r\n$tableHeaderCellHighlightHoverBg:$shade200 !default;\r\n$tableHeaderCellHighlightTextHoverColor:$primaryColor !default;\r\n$tableSortableColumnBadgeSize:1.143rem !default;\r\n\r\n$tableBodyRowBg:$shade000 !default;\r\n$tableBodyRowTextColor:$shade700 !default;\r\n$tableBodyRowEvenBg:scale-color($tableBodyRowBg, $lightness: -1%) !default;\r\n$tableBodyRowHoverBg:$shade200 !default;\r\n$tableBodyRowTextHoverColor:$shade700 !default;\r\n$tableBodyCellBorder:1px solid $shade200 !default;\r\n$tableBodyCellBorderWidth:0 0 1px 0 !default;\r\n$tableBodyCellPadding:1rem 1rem !default;\r\n\r\n$tableFooterCellPadding:1rem 1rem !default;\r\n$tableFooterCellBg:$shade100 !default;\r\n$tableFooterCellTextColor:$shade700 !default;\r\n$tableFooterCellFontWeight:600 !default;\r\n$tableFooterCellBorder:1px solid $shade200 !default;\r\n$tableFooterCellBorderWidth:0 0 1px 0 !default;\r\n$tableResizerHelperBg:$primaryColor !default;\r\n\r\n$tableFooterBorder:1px solid $shade200 !default;\r\n$tableFooterBorderWidth:0 0 1px 0 !default;\r\n$tableFooterBg:$shade100 !default;\r\n$tableFooterTextColor:$shade700 !default;\r\n$tableFooterFontWeight:600 !default;\r\n$tableFooterPadding:1rem 1rem !default;\r\n\r\n$tableCellContentAlignment:left !default;\r\n$tableTopPaginatorBorderWidth:0 0 1px 0 !default;\r\n$tableBottomPaginatorBorderWidth:0 0 1px 0 !default;\r\n\r\n$tableScaleSM:0.5 !default;\r\n$tableScaleLG:1.25 !default;\r\n\r\n//dataview\r\n$dataViewContentPadding:0 !default;\r\n$dataViewContentBorder:0 none !default;\r\n$dataViewListItemBorder:solid $shade200 !default;\r\n$dataViewListItemBorderWidth:0 0 1px 0 !default;\r\n\r\n//orderlist, picklist\r\n$orderListBreakpoint:769px !default;\r\n$pickListBreakpoint:769px !default;\r\n\r\n//schedule\r\n$fullCalendarEventBg:$primaryDarkColor !default;\r\n$fullCalendarEventBorder:1px solid $primaryDarkColor !default;\r\n$fullCalendarEventTextColor:$primaryTextColor !default;\r\n\r\n//tree\r\n$treeContainerPadding:0.286rem !default;\r\n$treeNodePadding:0.143rem !default;\r\n$treeNodeContentPadding:.5rem !default;\r\n$treeNodeChildrenPadding:0 0 0 1rem !default;\r\n$treeNodeIconColor:$shade600 !default;\r\n\r\n//timeline\r\n$timelineVerticalEventContentPadding:0 1rem !default;\r\n$timelineHorizontalEventContentPadding:1rem 0 !default;\r\n$timelineEventMarkerWidth:1rem !default;\r\n$timelineEventMarkerHeight:1rem !default;\r\n$timelineEventMarkerBorderRadius:50% !default;\r\n$timelineEventMarkerBorder:2px solid $primaryColor !default;\r\n$timelineEventMarkerBackground:$shade000 !default;\r\n$timelineEventConnectorSize:2px !default;\r\n$timelineEventColor:$shade300 !default;\r\n\r\n//org chart\r\n$organizationChartConnectorColor:$shade300 !default;\r\n\r\n//message\r\n$messageMargin:1rem 0 !default;\r\n$messagePadding:1rem 1.5rem !default;\r\n$messageBorderWidth:0 0 0 6px !default;\r\n$messageIconFontSize:1.5rem !default;\r\n$messageTextFontSize:1rem !default;\r\n$messageTextFontWeight:500 !default;\r\n\r\n//inline message\r\n$inlineMessagePadding:$inputPadding !default;\r\n$inlineMessageMargin:0 !default;\r\n$inlineMessageIconFontSize:1rem !default;\r\n$inlineMessageTextFontSize:1rem !default;\r\n$inlineMessageBorderWidth:0px !default;\r\n\r\n//toast\r\n$toastIconFontSize:2rem !default;\r\n$toastMessageTextMargin:0 0 0 1rem !default;\r\n$toastMargin:0 0 1rem 0 !default;\r\n$toastPadding:1rem !default;\r\n$toastBorderWidth:0 0 0 6px !default;\r\n$toastShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;\r\n$toastOpacity:.9 !default;\r\n$toastTitleFontWeight:700 !default;\r\n$toastDetailMargin:$inlineSpacing 0 0 0 !default;\r\n\r\n//severities\r\n$infoMessageBg:#B3E5FC !default;\r\n$infoMessageBorder:solid scale-color($infoMessageBg, $lightness: -50%) !default;\r\n$infoMessageTextColor:scale-color($infoMessageBg, $lightness: -75%) !default;\r\n$infoMessageIconColor:scale-color($infoMessageBg, $lightness: -75%) !default;\r\n$successMessageBg:#C8E6C9 !default;\r\n$successMessageBorder:solid scale-color($successMessageBg, $lightness: -50%) !default;\r\n$successMessageTextColor:scale-color($successMessageBg, $lightness: -75%) !default;\r\n$successMessageIconColor:scale-color($successMessageBg, $lightness: -75%) !default;\r\n$warningMessageBg:#FFECB3 !default;\r\n$warningMessageBorder:solid scale-color($warningMessageBg, $lightness: -50%) !default;\r\n$warningMessageTextColor:scale-color($warningMessageBg, $lightness: -75%) !default;\r\n$warningMessageIconColor:scale-color($warningMessageBg, $lightness: -75%) !default;\r\n$errorMessageBg:#FFCDD2 !default;\r\n$errorMessageBorder:solid scale-color($errorMessageBg, $lightness: -50%) !default;\r\n$errorMessageTextColor:scale-color($errorMessageBg, $lightness: -75%) !default;\r\n$errorMessageIconColor:scale-color($errorMessageBg, $lightness: -75%) !default;\r\n\r\n//overlays\r\n$overlayContentBorder:0 none !default;\r\n$overlayContentBg:$panelContentBg !default;\r\n$overlayContainerShadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12) !default;\r\n\r\n//dialog\r\n$dialogHeaderBg:$shade000 !default;\r\n$dialogHeaderBorder:0 none !default;\r\n$dialogHeaderTextColor:$shade700 !default;\r\n$dialogHeaderFontWeight:600 !default;\r\n$dialogHeaderFontSize:1.25rem !default;\r\n$dialogHeaderPadding:1.5rem !default;\r\n$dialogContentPadding:0 1.5rem 2rem 1.5rem !default;\r\n$dialogFooterBorder:0 none !default;\r\n$dialogFooterPadding:0 1.5rem 1.5rem 1.5rem !default;\r\n\r\n//tooltip\r\n$tooltipBg:$shade700 !default;\r\n$tooltipTextColor:$shade000 !default;\r\n$tooltipPadding:$inputPadding !default;\r\n\r\n//steps\r\n$stepsItemBg:$shade000 !default;\r\n$stepsItemBorder:1px solid $shade200 !default;\r\n$stepsItemTextColor:$shade600 !default;\r\n$stepsItemNumberWidth:2rem !default;\r\n$stepsItemNumberHeight:2rem !default;\r\n$stepsItemNumberFontSize:1.143rem !default;\r\n$stepsItemNumberColor:$shade700 !default;\r\n$stepsItemNumberBorderRadius:50% !default;\r\n$stepsItemActiveFontWeight:600 !default;\r\n\r\n//progressbar\r\n$progressBarHeight:1.5rem !default;\r\n$progressBarBorder:0 none !default;\r\n$progressBarBg:$shade300 !default;\r\n$progressBarValueBg:$primaryColor !default;\r\n\r\n//menu (e.g. menu, menubar, tieredmenu)\r\n$menuWidth:12.5rem !default;\r\n$menuBg:$shade000 !default;\r\n$menuBorder:1px solid $shade300 !default;\r\n$menuTextColor:$shade700 !default;\r\n$menuitemPadding:.75rem 1rem !default;\r\n$menuitemBorderRadius:0 !default;\r\n$menuitemTextColor:$shade700 !default;\r\n$menuitemIconColor:$shade600 !default;\r\n$menuitemTextHoverColor:$shade700 !default;\r\n$menuitemIconHoverColor:$shade600 !default;\r\n$menuitemHoverBg:$shade200 !default;\r\n$menuitemTextActiveColor:$shade700 !default;\r\n$menuitemIconActiveColor:$shade600 !default;\r\n$menuitemActiveBg:$shade200 !default;\r\n$menuitemSubmenuIconFontSize:.875rem !default;\r\n$submenuHeaderMargin:0 !default;\r\n$submenuHeaderPadding:.75rem 1rem !default;\r\n$submenuHeaderBg:$shade000 !default;\r\n$submenuHeaderTextColor:$shade700 !default;\r\n$submenuHeaderBorderRadius:0 !default;\r\n$submenuHeaderFontWeight:600 !default;\r\n$overlayMenuBg:$menuBg !default;\r\n$overlayMenuBorder:0 none !default;\r\n$overlayMenuShadow:0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !default;\r\n$verticalMenuPadding:.25rem 0 !default;\r\n$verticalMenuitemMargin:0;\r\n$menuSeparatorMargin:.25rem 0 !default;\r\n\r\n$breadcrumbPadding:1rem !default;\r\n$breadcrumbBg:$menuBg !default;\r\n$breadcrumbBorder:$menuBorder !default;\r\n$breadcrumbItemTextColor:$menuitemTextColor !default;\r\n$breadcrumbItemIconColor:$menuitemIconColor !default;\r\n$breadcrumbLastItemTextColor:$menuitemTextColor !default;\r\n$breadcrumbLastItemIconColor:$menuitemIconColor !default;\r\n$breadcrumbSeparatorColor:$menuitemTextColor !default;\r\n\r\n$horizontalMenuPadding:.5rem !default;\r\n$horizontalMenuBg:$shade100 !default;\r\n$horizontalMenuBorder:$menuBorder !default;\r\n$horizontalMenuTextColor:$menuTextColor !default;\r\n$horizontalMenuRootMenuitemPadding:$menuitemPadding !default;\r\n$horizontalMenuRootMenuitemBorderRadius:$borderRadius !default;\r\n$horizontalMenuRootMenuitemTextColor:$menuitemTextColor !default;\r\n$horizontalMenuRootMenuitemIconColor:$menuitemIconColor !default;\r\n$horizontalMenuRootMenuitemTextHoverColor:$menuitemTextHoverColor !default;\r\n$horizontalMenuRootMenuitemIconHoverColor:$menuitemIconHoverColor !default;\r\n$horizontalMenuRootMenuitemHoverBg:$menuitemHoverBg !default;\r\n$horizontalMenuRootMenuitemTextActiveColor:$menuitemTextActiveColor !default;\r\n$horizontalMenuRootMenuitemIconActiveColor:$menuitemIconActiveColor !default;\r\n$horizontalMenuRootMenuitemActiveBg:$menuitemActiveBg !default;\r\n\r\n//badge and tag\r\n$badgeBg:$primaryColor !default;\r\n$badgeTextColor:$primaryTextColor !default;\r\n$badgeMinWidth:1.5rem !default;\r\n$badgeHeight:1.5rem !default;\r\n$badgeFontWeight:700 !default;\r\n$badgeFontSize:.75rem !default;\r\n\r\n$tagPadding:.25rem .4rem !default;\r\n\r\n//carousel\r\n$carouselIndicatorsPadding:1rem !default;\r\n$carouselIndicatorBg:$shade200 !default;\r\n$carouselIndicatorHoverBg:$shade300 !default;\r\n$carouselIndicatorBorderRadius:0 !default;\r\n$carouselIndicatorWidth:2rem !default;\r\n$carouselIndicatorHeight:.5rem !default;\r\n\r\n//galleria\r\n$galleriaMaskBg:rgba(0,0,0,0.9) !default;\r\n$galleriaCloseIconMargin:.5rem !default;\r\n$galleriaCloseIconFontSize:2rem !default;\r\n$galleriaCloseIconBg:transparent !default;\r\n$galleriaCloseIconColor:$shade100 !default;\r\n$galleriaCloseIconHoverBg:rgba(255,255,255,0.1) !default;\r\n$galleriaCloseIconHoverColor:$shade100 !default;\r\n$galleriaCloseIconWidth:4rem !default;\r\n$galleriaCloseIconHeight:4rem !default;\r\n$galleriaCloseIconBorderRadius:50% !default;\r\n\r\n$galleriaItemNavigatorBg:transparent !default;\r\n$galleriaItemNavigatorColor:$shade100 !default;\r\n$galleriaItemNavigatorMargin:0 .5rem !default;\r\n$galleriaItemNavigatorFontSize:2rem !default;\r\n$galleriaItemNavigatorHoverBg:rgba(255,255,255,0.1) !default;\r\n$galleriaItemNavigatorHoverColor:$shade100 !default;\r\n$galleriaItemNavigatorWidth:4rem !default;\r\n$galleriaItemNavigatorHeight:4rem !default;\r\n$galleriaItemNavigatorBorderRadius:$borderRadius !default;\r\n\r\n$galleriaCaptionBg:rgba(0,0,0,.5) !default;\r\n$galleriaCaptionTextColor:$shade100 !default;\r\n$galleriaCaptionPadding:1rem !default;\r\n\r\n$galleriaIndicatorsPadding:1rem !default;\r\n$galleriaIndicatorBg:$shade200 !default;\r\n$galleriaIndicatorHoverBg:$shade300 !default;\r\n$galleriaIndicatorBorderRadius:50% !default;\r\n$galleriaIndicatorWidth:1rem !default;\r\n$galleriaIndicatorHeight:1rem !default;\r\n$galleriaIndicatorsBgOnItem:rgba(0,0,0,.5) !default;\r\n$galleriaIndicatorBgOnItem:rgba(255,255,255,.4) !default;\r\n$galleriaIndicatorHoverBgOnItem:rgba(255,255,255,.6) !default;\r\n\r\n$galleriaThumbnailContainerBg:rgba(0,0,0,.9) !default;\r\n$galleriaThumbnailContainerPadding:1rem .25rem !default;\r\n$galleriaThumbnailNavigatorBg:transparent !default;\r\n$galleriaThumbnailNavigatorColor:$shade100 !default;\r\n$galleriaThumbnailNavigatorHoverBg:rgba(255,255,255,0.1) !default;\r\n$galleriaThumbnailNavigatorHoverColor:$shade100 !default;\r\n$galleriaThumbnailNavigatorBorderRadius:50% !default;\r\n$galleriaThumbnailNavigatorWidth:2rem !default;\r\n$galleriaThumbnailNavigatorHeight:2rem !default;\r\n\r\n//divider\r\n$dividerHorizontalMargin:1rem 0;\r\n$dividerHorizontalPadding:0 1rem;\r\n$dividerVerticalMargin:0 1rem;\r\n$dividerVerticalPadding:1rem 0;\r\n$dividerSize:1px;\r\n$dividerColor:$shade300;\r\n\r\n//avatar\r\n$avatarBg:$shade300;\r\n$avatarTextColor:$textColor;\r\n\r\n//chip\r\n$chipBg:$shade300;\r\n$chipTextColor:$textColor;\r\n$chipBorderRadius: 16px;\r\n\r\n//scrollTop\r\n$scrollTopBg:rgba(0,0,0,0.7);\r\n$scrollTopHoverBg:rgba(0,0,0,0.8);\r\n$scrollTopWidth:3rem;\r\n$scrollTopHeight:3rem;\r\n$scrollTopBorderRadius:50%;\r\n$scrollTopFontSize:1.5rem;\r\n$scrollTopTextColor:$shade100;\r\n\r\n//skeleton\r\n$skeletonBg:$shade200;\r\n$skeletonAnimationBg:rgba(255,255,255,0.4);\r\n\r\n//splitter\r\n$splitterGutterBg:$shade100;\r\n$splitterGutterHandleBg:$shade300;\r\n\r\n:root &#123;\r\n    --surface-a:#&#123;$shade000&#125;;\r\n    --surface-b:#&#123;$shade100&#125;;\r\n    --surface-c:#&#123;$shade200&#125;;\r\n    --surface-d:#&#123;$shade300&#125;;\r\n    --surface-e:#&#123;$shade000&#125;;\r\n    --surface-f:#&#123;$shade000&#125;;\r\n    --text-color:#&#123;$shade700&#125;;\r\n    --text-color-secondary:#&#123;$shade600&#125;;\r\n    --primary-color:#&#123;$primaryColor&#125;;\r\n    --primary-color-text:#&#123;$primaryTextColor&#125;;\r\n    --primary-dark-color:#&#123;$primaryDarkColor&#125;;\r\n    --font-family:#&#123;$fontFamily&#125;;\r\n&#125;\r\n</app-code>\r\n</div>\r\n\r\n            <h4>Menu Modes</h4>\r\n            <p>Menu has 3 modes, static, overlay and horizontal. Layout container element in application.html is used to define which mode to use by adding specific classes. List\r\n            below indicates the style classes for each mode. In addition menu</p>\r\n            <ul>\r\n                <li>Static: \"layout-wrapper layout-static\"</li>\r\n                <li>Overlay: \"layout-wrapper layout-overlay\"</li>\r\n                <li>Horizontal: \"layout-wrapper layout-static layout-horizontal\"</li>\r\n            </ul>\r\n\r\n            <p>For example to create a horizontal menu, the div element should be in following form;</p>\r\n<app-code ngPreserveWhitespaces ngNonBindable lang=\"javascript\">\r\n&lt;div class=\"layout-wrapper layout-compact\"&gt;\r\n    &lt;div class=\"layout-container layout-static layout-horizonal\"&gt;\r\n</app-code>\r\n\r\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and usign an expression to bind it so that user can switch between modes. Sample\r\n            application has an example implementation of such use case. Refer to app.component.ts for an example.</p>\r\n\r\n            <h4>Grid CSS</h4>\r\n            <p>Poseidon uses PrimeNG Flex Grid CSS throughout the demos such as Dashboard, however any Grid library can be used with it since Poseidon Layout itself does not depend on PrimeFlex CSS.</p>\r\n\r\n            <h4>Customizing Styles</h4>\r\n            <p>It is suggested to add your customizations in the following sass files under the override folder instead of adding them to the\r\n                scss files under sass folder to avoid maintenance issues after an update.</p>\r\n\r\n            <ul>\r\n                <li><b>_layout_variables</b>: Variables of the layout.</li>\r\n                <li><b>_layout_styles</b>: Styles for the layout.</li>\r\n                <li><b>_theme_variables</b>: Variables of the theme.</li>\r\n                <li><b>_theme_styles</b>: Styles for the theme.</li>\r\n            </ul>\r\n\r\n            <h4>Migration Guide</h4>\r\n            <p>Every change is included in <b>CHANGELOG.md</b> file at the root folder of the distribution along with the instructions to update.</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "a9iL":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/emptydemo.component.ts ***!
      \**************************************************/

    /*! exports provided: EmptyDemoComponent */

    /***/
    function a9iL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmptyDemoComponent", function () {
        return EmptyDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_emptydemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./emptydemo.component.html */
      "8nPe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var EmptyDemoComponent = function EmptyDemoComponent(breadcrumbService) {
        _classCallCheck(this, EmptyDemoComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Pages'
        }, {
          label: 'Empty Page',
          routerLink: ['/pages/empty']
        }]);
      };

      EmptyDemoComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      EmptyDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_emptydemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], EmptyDemoComponent);
      /***/
    },

    /***/
    "aOMY":
    /*!***************************************************!*\
      !*** ./src/app/demo/view/chartsdemo.component.ts ***!
      \***************************************************/

    /*! exports provided: ChartsDemoComponent */

    /***/
    function aOMY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartsDemoComponent", function () {
        return ChartsDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chartsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chartsdemo.component.html */
      "vdpq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var ChartsDemoComponent = /*#__PURE__*/function () {
        function ChartsDemoComponent(breadcrumbService) {
          _classCallCheck(this, ChartsDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'UI Kit'
          }, {
            label: 'Chart',
            routerLink: ['/uikit/charts']
          }]);
        }

        _createClass(ChartsDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lineData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgb(255, 205, 86)',
                borderColor: 'rgb(255, 205, 86)'
              }, {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)'
              }]
            };
            this.barData = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [65, 59, 80, 81, 56, 55, 40]
              }, {
                label: 'My Second dataset',
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                data: [28, 48, 40, 19, 86, 27, 90]
              }]
            };
            this.pieData = {
              labels: ['A', 'B', 'C'],
              datasets: [{
                data: [540, 325, 702, 421],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)']
              }]
            };
            this.polarData = {
              datasets: [{
                data: [11, 16, 7, 3],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
                label: 'My dataset'
              }],
              labels: ['Blue', 'Purple', 'Orange', 'Green']
            };
            this.radarData = {
              labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
              datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(54, 162, 235,0.2)',
                borderColor: 'rgba(54, 162, 235,1)',
                pointBackgroundColor: 'rgba(54, 162, 235,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
              }, {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255, 99, 132,0.2)',
                borderColor: 'rgba(255, 99, 132,1)',
                pointBackgroundColor: 'rgba(255, 99, 132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }]
            };
            this.chartsOptions = {
              legend: {
                display: true,
                labels: {
                  fontColor: '#A0A7B5'
                }
              },
              responsive: true,
              scales: {
                yAxes: [{
                  ticks: {
                    fontColor: '#A0A7B5'
                  },
                  gridLines: {
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }],
                xAxes: [{
                  ticks: {
                    fontColor: '#A0A7B5'
                  },
                  gridLines: {
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }]
              }
            };
            this.chartsOptions2 = {
              legend: {
                display: true,
                labels: {
                  fontColor: '#A0A7B5'
                }
              },
              responsive: true
            };
          }
        }]);

        return ChartsDemoComponent;
      }();

      ChartsDemoComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      ChartsDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_chartsdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ChartsDemoComponent);
      /***/
    },

    /***/
    "aSPh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function aSPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\r\n    .sale-graph {\r\n        background: linear-gradient(99deg, #832e17 0%, #040403 100%);\r\n        background-size: cover;\r\n    }\r\n</style>\r\n\r\n<div class=\"layout-dashboard\">\r\n    <div class=\"p-grid\">\r\n        <div class=\"p-col-12 p-md-12 p-xl-6\">\r\n            <div class=\"p-grid\">\r\n                <div class=\"p-col-12\">\r\n                    <div class=\"card sale-graph\">\r\n                        <div class=\"card-header\">\r\n                            <div class=\"p-col-12 p-md-12 p-xl-12\">\r\n                                <div class=\"card news\">\r\n                                    <div class=\"news-content\">\r\n                                        <h5>What to expect? </h5>\r\n                                        <span>On this website i will address the subject: Pablo.</span>\r\n                                        <hr>\r\n                                        <img src=\"./../../../assets/images/pablo/5.png\" alt=\"\">\r\n                                        <span>After all, who is Pablo? Well, you'd better be comfortable with your\r\n                                            computer or cell phone because it's going to be a long trip.</span>\r\n                                        <div class=\"news-content-footer\">\r\n                                            <hr>\r\n                                            <span><span>May 23, 2022 </span>by <span class=\"category\">Débora L. M.\r\n                                                    Maciel</span></span>\r\n                                            <span>Curitiba, Brazil</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"news-image\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-6\">\r\n            <div class=\"p-grid\">\r\n                <div class=\"p-col-12 p-md-12 p-xl-12\">\r\n                    <div class=\"card traffic\">\r\n                        <div class=\"card-header\">\r\n                            <h6>Status</h6>\r\n                        </div>\r\n                        <p>(Rememberting the numbers are fictious, Pablo is 100% in everything he does :0 </p>\r\n                        <div class=\"traffic-chart\">\r\n                            <p-chart #traffic type=\"doughnut\" [data]=\"trafficChart\" [options]=\"trafficOptions\"\r\n                                [responsive]=\"true\" width=\"210px\" height=\"210px\"></p-chart>\r\n                        </div>\r\n                        <div id=\"traffic-tabs-container\" class=\"traffic-tabs\">\r\n                            <div class=\"traffic-tab\" [ngClass]=\"{'traffic-tab-active':activeTraffic===0}\"\r\n                                (click)=\"changeTrafficset($event); traffic.refresh()\" data-label=\"New Sales\"\r\n                                data-index=\"0\">\r\n                                <h6>99%</h6>\r\n                                <i class=\"pi pi-tag\"></i>\r\n                                <span>Hot</span>\r\n                            </div>\r\n                            <div class=\"traffic-tab\" [ngClass]=\"{'traffic-tab-active':activeTraffic===1}\"\r\n                                (click)=\"changeTrafficset($event); traffic.refresh()\" data-label=\"New Sales\"\r\n                                data-index=\"1\">\r\n                                <h6>48%</h6>\r\n                                <i class=\"pi pi-heart\"></i>\r\n                                <span>Loving</span>\r\n                            </div>\r\n                            <div class=\"traffic-tab\" [ngClass]=\"{'traffic-tab-active':activeTraffic===2}\"\r\n                                (click)=\"changeTrafficset($event); traffic.refresh()\" data-label=\"New Sales\"\r\n                                data-index=\"2\">\r\n                                <h6>48%</h6>\r\n                                <i class=\"pi pi-question-circle\"></i>\r\n                                <span>Smart</span>\r\n                            </div>\r\n                            <div class=\"traffic-tab \" [ngClass]=\"{'traffic-tab-active':activeTraffic===3}\"\r\n                                (click)=\"changeTrafficset($event); traffic.refresh()\" data-label=\"Previous Sales\"\r\n                                data-index=\"3\">\r\n                                <h6>98%</h6>\r\n                                <i class=\"pi pi-comments\"></i>\r\n                                <span>Communicative</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-6\">\r\n            <div class=\"card leaderboard\">\r\n                <div class=\"card-header\">\r\n                    <h6>Best Friends or something just like it </h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/images/people/1.png\" alt=\"poseidon-layout\" />\r\n                            <p>Débora Ferreira</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\"\r\n                                class=\"p-button-secondary p-button-outlined\"\r\n                                (click)=\"selectedItem = 1; menu7.toggle($event)\"></button>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/images/people/2.jpg\" alt=\"poseidon-layout\" />\r\n                            <p>Matheus Pontel</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\"\r\n                                class=\"p-button-secondary p-button-outlined\"\r\n                                (click)=\"selectedItem = 2; menu7.toggle($event)\"></button>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/images/people/3.png\" alt=\"poseidon-layout\" />\r\n                            <p>Diovana Mazur</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\"\r\n                                class=\"p-button-secondary p-button-outlined\"\r\n                                (click)=\"selectedItem = 3; menu7.toggle($event)\"></button>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/images/people/helo/1.jfif\" alt=\"poseidon-layout\" />\r\n                            <p>Helo</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\"\r\n                                class=\"p-button-secondary p-button-outlined\"\r\n                                (click)=\"selectedItem = 4; menu7.toggle($event)\"></button>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"person\">\r\n                            <img src=\"assets/images/people/mari/1.jfif\" alt=\"poseidon-layout\" />\r\n                            <p>Mari</p>\r\n                        </div>\r\n                        <div class=\"person-numbers\">\r\n                            <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\"\r\n                                class=\"p-button-secondary p-button-outlined\"\r\n                                (click)=\"selectedItem = 5; menu7.toggle($event)\"></button>\r\n                        </div>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <p-menu #menu7 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-6\">\r\n            <div class=\"card product-list\">\r\n                <div class=\"card-header\">\r\n                    <h6>Games I associate with pablo</h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/images/games/1.jpg\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Genshin Impact</p>\r\n                                <span>oq posso dizer, pablo é viciadasso nesse game aqkkkk</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-circle-off\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/images/games/2.webp\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Wild Rift</p>\r\n                                <span>se ele n ta on no genshin pode vir leve q ele ta nesse aq</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-circle-off\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/images/games/3.jpg\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>League of Legends</p>\r\n                                <span>best lux br????</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-circle-off\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/images/games/4.webp\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Point Blank</p>\r\n                                <span>nunca vi ele joga esse mas ele falou mt pra mim deste gamer aq</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-circle-off down\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/images/games/5.jpg\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Transformice</p>\r\n                                <span>mlk pablo é vencedor mundial deste, falo</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-circle-off\"></i>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-3\">\r\n            <div class=\"card tasks\">\r\n                <img src=\"./../../../../assets/gif/3.gif\" alt=\"a\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-6\">\r\n            <div class=\"card tasks\">\r\n                <div class=\"card-header\">\r\n                    <h6>Tasks</h6>\r\n                </div>\r\n                <span style=\"font-size: 0.9em; font-weight: 600;\">\r\n                    This site is a tribute to Pablo Elizandro Fiori, a simply incredible person who cannot be explained\r\n                    in words, the day of the launch of this site will be the birth day of one of the most important\r\n                    people in my life, I hope this memory is very well received.\r\n                    You are a wonderful person, you were a vital part of my life until the moment I am writing this and\r\n                    beyond, I hope you enjoy this very special day that is your birthday.\r\n                </span>\r\n                <hr>\r\n                <div style=\"margin: auto; text-align: center;\">\r\n                    <img src=\"./../../../../assets/gif/1.gif\" alt=\"\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-3\">\r\n            <div class=\"card tasks\">\r\n                <img src=\"./../../../../assets/gif/3.gif\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "anCR":
    /*!**********************************************!*\
      !*** ./src/app/pages/app.error.component.ts ***!
      \**********************************************/

    /*! exports provided: AppErrorComponent */

    /***/
    function anCR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppErrorComponent", function () {
        return AppErrorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_error_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.error.component.html */
      "LwCC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppErrorComponent = function AppErrorComponent() {
        _classCallCheck(this, AppErrorComponent);
      };

      AppErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-error',
        template: _raw_loader_app_error_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppErrorComponent);
      /***/
    },

    /***/
    "axq9":
    /*!*************************************!*\
      !*** ./src/app/app.menu.service.ts ***!
      \*************************************/

    /*! exports provided: MenuService */

    /***/
    function axq9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuService", function () {
        return MenuService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MenuService = /*#__PURE__*/function () {
        function MenuService() {
          _classCallCheck(this, MenuService);

          this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.resetSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.menuSource$ = this.menuSource.asObservable();
          this.resetSource$ = this.resetSource.asObservable();
        }

        _createClass(MenuService, [{
          key: "onMenuStateChange",
          value: function onMenuStateChange(key) {
            this.menuSource.next(key);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.resetSource.next();
          }
        }]);

        return MenuService;
      }();

      MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MenuService);
      /***/
    },

    /***/
    "eCx7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/panelsdemo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function eCx7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card toolbar-demo\">\r\n            <h5>Toolbar</h5>\r\n            <p-toolbar>\r\n                <div class=\"p-toolbar-group-left\">\r\n                    <button pButton type=\"button\" label=\"New\" icon=\"pi pi-plus\"></button>\r\n                    <button pButton type=\"button\" label=\"Update\" class=\"p-button-secondary\"\r\n                            icon=\"pi pi-refresh\"></button>\r\n\r\n                    <i class=\"pi pi-bars p-toolbar-separator\"></i>\r\n\r\n                    <button pButton type=\"button\" class=\"p-button-success\" icon=\"pi pi-check\"></button>\r\n                    <button pButton type=\"button\" class=\"p-button-help\" icon=\"pi pi-print\"></button>\r\n                    <button pButton type=\"button\" class=\"p-button-danger\" icon=\"pi pi-trash\"></button>\r\n                </div>\r\n\r\n                <div class=\"p-toolbar-group-right\">\r\n                    <p-splitButton label=\"Save\" icon=\"pi pi-check\" [model]=\"items\"></p-splitButton>\r\n                </div>\r\n            </p-toolbar>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-6\">\r\n        <div class=\"card\">\r\n            <h5>AccordionPanel</h5>\r\n            <p-accordion>\r\n                <p-accordionTab header=\"Header I\" [selected]=\"true\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                    consequat.\r\n                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n                    pariatur.\r\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r\n                    est laborum.\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"Header II\">\r\n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\r\n                    totam rem aperiam, eaque\r\n                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\r\n                    enim ipsam voluptatem quia\r\n                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\r\n                    voluptatem sequi nesciunt.\r\n                    Consectetur, adipisci velit, sed quia non numquam eius modi.\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"Header III\">\r\n                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\r\n                    deleniti atque corrupti quos dolores\r\n                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui\r\n                    officia deserunt mollitia animi, id est laborum et dolorum fuga.\r\n                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\r\n                    eligendi optio cumque nihil impedit\r\n                    quo minus.\r\n                </p-accordionTab>\r\n            </p-accordion>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5>TabView</h5>\r\n            <p-tabView orientation=\"left\">\r\n                <p-tabPanel header=\"Header I\" leftIcon=\"pi pi-check\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua.\r\n                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                    consequat.\r\n                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n                    pariatur.\r\n                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\r\n                    est laborum.\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"Header II\" leftIcon=\"pi pi-user\">\r\n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\r\n                    totam rem aperiam, eaque\r\n                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo\r\n                    enim ipsam voluptatem quia\r\n                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\r\n                    voluptatem sequi nesciunt.\r\n                    Consectetur, adipisci velit, sed quia non numquam eius modi.\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"Header III\" leftIcon=\"pi pi-mobile\">\r\n                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\r\n                    deleniti atque corrupti quos dolores\r\n                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui\r\n                    officia deserunt mollitia animi, id est laborum et dolorum fuga.\r\n                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\r\n                    eligendi optio cumque nihil impedit\r\n                    quo minus.\r\n                </p-tabPanel>\r\n            </p-tabView>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-6\">\r\n        <div class=\"card\">\r\n            <h5>Panel</h5>\r\n            <p-panel header=\"Header\" [toggleable]=\"true\">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua.\r\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                consequat.\r\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n                laborum.\r\n            </p-panel>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5>Fieldset</h5>\r\n            <p-fieldset legend=\"Toggleable\" toggleable=\"true\">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua.\r\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                consequat.\r\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n                laborum.\r\n            </p-fieldset>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h5>Card</h5>\r\n                <p-menu #menu [popup]=\"true\" [model]=\"cardMenu\"></p-menu>\r\n                <button pButton type=\"button\" icon=\"pi pi-plus\" class=\"p-button-rounded p-button-plain p-button-text\"\r\n                        (click)=\"menu.toggle($event)\"></button>\r\n            </div>\r\n\r\n            <p class=\"card-subtitle\">Subtitle</p>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r\n                dolore magna aliqua.\r\n                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n                consequat.\r\n                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\r\n                laborum.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>Divider</h5>\r\n            <div class=\"p-grid\">\r\n                <div class=\"p-col-5 p-d-flex p-ai-center p-jc-center\">\r\n                    <div class=\"p-fluid\">\r\n                        <div class=\"p-field\">\r\n                            <label for=\"username\">Username</label>\r\n                            <input pInputText id=\"username\" type=\"text\"/>\r\n                        </div>\r\n                        <div class=\"p-field\">\r\n                            <label for=\"password\">Password</label>\r\n                            <input pInputText id=\"password\" type=\"password\"/>\r\n                        </div>\r\n                        <p-button label=\"Login\"></p-button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-col-1\">\r\n                    <p-divider layout=\"vertical\">\r\n                        <b>OR</b>\r\n                    </p-divider>\r\n                </div>\r\n                <div class=\"p-col-5 p-ai-center p-jc-center\">\r\n                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\r\n                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\r\n                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\r\n                        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\r\n                        voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>\r\n\r\n                    <p-divider layout=\"horizontal\" align=\"center\">\r\n                        <span class=\"p-tag\">Badge</span>\r\n                    </p-divider>\r\n\r\n                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum\r\n                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati\r\n                        cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est\r\n                        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.\r\n                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>\r\n\r\n                    <p-divider align=\"right\">\r\n                        <p-button label=\"Button\" icon=\"pi pi-search\" styleClass=\"p-button-outlined\"></p-button>\r\n                    </p-divider>\r\n\r\n                    <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et\r\n                        voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur\r\n                        a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis\r\n                        doloribus asperiores repellat.\r\n                        Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien.\r\n                        Morbi dapibus luctus odio.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>Splitter</h5>\r\n            <p-splitter [style]=\"{'height': '300px'}\" [panelSizes]=\"[40,60]\" [minSizes]=\"[10,0]\" styleClass=\"p-mb-5\">\r\n                <ng-template>\r\n                    <div class=\"p-col p-mt-3\" style=\"overflow: auto\">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\r\n                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\r\n                        id est laborum.\r\n                    </div>\r\n                </ng-template>\r\n                <ng-template>\r\n                    <div style=\"overflow: auto\">\r\n                        <p-splitter layout=\"vertical\" [panelSizes]=\"[15,85]\">\r\n                            <ng-template>\r\n                                <div style=\"flex-grow: 1;\" class=\"p-col p-mt-3\" style=\"overflow: auto\">\r\n                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium\r\n                                    doloremque\r\n                                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\r\n                                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia\r\n                                    voluptas\r\n                                    sit\r\n                                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione\r\n                                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius\r\n                                    modi.\r\n                                </div>\r\n                            </ng-template>\r\n                            <ng-template>\r\n                                <div style=\"flex-grow: 1;\" class=\"p-col p-mt-3\" style=\"overflow: auto\">\r\n                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\r\n                                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias\r\n                                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui\r\n                                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem\r\n                                    rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\r\n                                    eligendi optio cumque nihil impedit quo minus.\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-splitter>\r\n                    </div>\r\n                </ng-template>\r\n            </p-splitter>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "eSy0":
    /*!***********************************************!*\
      !*** ./src/app/demo/view/floatlabeldemo.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function eSy0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host ::ng-deep .floatlabel-demo .p-field {\n  margin-top: 2rem;\n}\n:host ::ng-deep .floatlabel-demo .p-multiselect-panel .p-multiselect-header {\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmbG9hdGxhYmVsZGVtby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7QUFEUiIsImZpbGUiOiJmbG9hdGxhYmVsZGVtby5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5mbG9hdGxhYmVsLWRlbW8ge1xyXG4gICAgLnAtZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnAtbXVsdGlzZWxlY3QtcGFuZWwgLnAtbXVsdGlzZWxlY3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "fbbu":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/miscdemo.component.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function fbbu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid misc-demo\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>ProgressBar</h5>\r\n            <div class=\"p-grid\">\r\n                <div class=\"p-col\">\r\n                    <p-progressBar [value]=\"value\" [showValue]=\"false\"></p-progressBar>\r\n                </div>\r\n                <div class=\"p-col\">\r\n                    <p-progressBar [value]=\"50\" [showValue]=\"false\"></p-progressBar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h4>Badge</h4>\r\n            <h5>Numbers</h5>\r\n            <div class=\"badges\">\r\n                <p-badge [value]=\"2\" styleClass=\"p-mr-2\"></p-badge>\r\n                <p-badge [value]=\"8\" severity=\"success\" styleClass=\"p-mr-2\"></p-badge>\r\n                <p-badge [value]=\"4\" severity=\"info\" styleClass=\"p-mr-2\"></p-badge>\r\n                <p-badge [value]=\"12\" severity=\"warning\" styleClass=\"p-mr-2\"></p-badge>\r\n                <p-badge [value]=\"3\" severity=\"danger\"></p-badge>\r\n            </div>\r\n\r\n            <h5>Positioned Badge</h5>\r\n            <i class=\"pi pi-bell p-mr-4 p-text-secondary\" pBadge style=\"font-size: 2rem\" value=\"2\"></i>\r\n            <i class=\"pi pi-calendar p-mr-4 p-text-secondary\" pBadge style=\"font-size: 2rem\" [value]=\"'10+'\" severity=\"danger\"></i>\r\n            <i class=\"pi pi-envelope p-text-secondary\" pBadge style=\"font-size: 2rem\" severity=\"danger\"></i>\r\n\r\n\r\n            <h5>Inline Button Badge</h5>\r\n            <p-button label=\"Emails\" badge=\"8\" styleClass=\"p-mr-2\"></p-button>\r\n            <p-button label=\"Messages\" icon=\"pi pi-users\" styleClass=\"p-button-warning\" badge=\"8\" badgeClass=\"p-badge-danger\"></p-button>\r\n\r\n            <h5>Sizes</h5>\r\n            <div class=\"badges\">\r\n                <p-badge [value]=\"2\" styleClass=\"p-mr-2\"></p-badge>\r\n                <p-badge [value]=\"4\" size=\"large\" severity=\"warning\" styleClass=\"p-mr-2\"></p-badge>\r\n                <p-badge [value]=\"6\" size=\"xlarge\" severity=\"success\" styleClass=\"p-mr-2\"></p-badge>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h4>Avatar</h4>\r\n            <h5>Avatar Group</h5>\r\n            <p-avatarGroup styleClass=\"p-mb-3\">\r\n                <p-avatar image=\"assets/demo/images/avatar/amyelsner.png\" size=\"large\" shape=\"circle\"></p-avatar>\r\n                <p-avatar image=\"assets/demo/images/avatar/asiyajavayant.png\" size=\"large\" shape=\"circle\"></p-avatar>\r\n                <p-avatar image=\"assets/demo/images/avatar/onyamalimba.png\" size=\"large\" shape=\"circle\"></p-avatar>\r\n                <p-avatar image=\"assets/demo/images/avatar/ionibowcher.png\" size=\"large\" shape=\"circle\"></p-avatar>\r\n                <p-avatar image=\"assets/demo/images/avatar/xuxuefeng.png\" size=\"large\"shape=\"circle\"></p-avatar>\r\n                <p-avatar label=\"+2\" shape=\"circle\" size=\"large\" [style]=\"{'background-color':'#9c27b0', 'color': '#ffffff'}\"></p-avatar>\r\n            </p-avatarGroup>\r\n\r\n            <h5>Label - Circle</h5>\r\n            <p-avatar label=\"P\" styleClass=\"p-mr-2\" size=\"xlarge\" shape=\"circle\"></p-avatar>\r\n            <p-avatar label=\"V\" styleClass=\"p-mr-2\" size=\"large\" [style]=\"{'background-color':'#2196F3', 'color': '#ffffff'}\" shape=\"circle\"></p-avatar>\r\n            <p-avatar label=\"U\" styleClass=\"p-mr-2\" [style]=\"{'background-color': '#9c27b0', 'color': '#ffffff'}\" shape=\"circle\"></p-avatar>\r\n\r\n            <h5>Icon - Badge</h5>\r\n            <p-avatar icon=\"pi pi-user\" pBadge value=\"4\" severity=\"success\" styleClass=\"p-mr-2\" size=\"xlarge\"></p-avatar>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h4>ScrollTop</h4>\r\n            <p-scrollPanel [style]=\"{width: '250px', height: '200px'}\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n                    Vitae et leo duis ut diam.\r\n                    Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.\r\n                    Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.\r\n                    Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.\r\n                    Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.\r\n                    Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.\r\n                    Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.\r\n                    Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.\r\n                    Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.\r\n                    Mattis aliquam faucibus purus in massa tempor nec.\r\n                </p>\r\n                <p-scrollTop target=\"parent\" styleClass=\"custom-scrolltop\" [threshold]=\"100\" icon=\"pi pi-arrow-up\"></p-scrollTop>\r\n            </p-scrollPanel>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h4>Tag</h4>\r\n            <h5>Tags</h5>\r\n            <p-tag styleClass=\"p-mr-2\" value=\"Primary\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" severity=\"success\" value=\"Success\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" severity=\"info\" value=\"Info\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" severity=\"warning\" value=\"Warning\"></p-tag>\r\n            <p-tag severity=\"danger\" value=\"Danger\"></p-tag>\r\n\r\n            <h5>Pills</h5>\r\n            <p-tag styleClass=\"p-mr-2\" value=\"Primary\" [rounded]=\"true\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" severity=\"success\" value=\"Success\" [rounded]=\"true\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" severity=\"info\" value=\"Info\" [rounded]=\"true\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" severity=\"warning\" value=\"Warning\" [rounded]=\"true\"></p-tag>\r\n            <p-tag severity=\"danger\" value=\"Danger\" [rounded]=\"true\"></p-tag>\r\n\r\n            <h5>Icons</h5>\r\n            <p-tag styleClass=\"p-mr-2\" icon=\"pi pi-user\" value=\"Primary\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" icon=\"pi pi-check\" severity=\"success\" value=\"Success\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" icon=\"pi pi-info-circle\" severity=\"info\" value=\"Info\"></p-tag>\r\n            <p-tag styleClass=\"p-mr-2\" con=\"pi pi-exclamation-triangle\" severity=\"warning\" value=\"Warning\"></p-tag>\r\n            <p-tag icon=\"pi pi-times\" severity=\"danger\" value=\"Danger\"></p-tag>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h4>Chip</h4>\r\n            <h5>Basic</h5>\r\n            <div class=\"p-d-flex p-ai-center\">\r\n                <p-chip label=\"Action\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Comedy\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Mystery\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Thriller\" [removable]=\"true\"></p-chip>\r\n            </div>\r\n\r\n            <h5>Icon</h5>\r\n            <div class=\"p-d-flex p-ai-center\">\r\n                <p-chip label=\"Apple\" icon=\"pi pi-apple\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Facebook\" icon=\"pi pi-facebook\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Google\" icon=\"pi pi-google\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Microsoft\" icon=\"pi pi-microsoft\" [removable]=\"true\"></p-chip>\r\n            </div>\r\n\r\n            <h5>Image</h5>\r\n            <div class=\"p-d-flex p-ai-center\">\r\n                <p-chip label=\"Amy Elsner\" image=\"assets/demo/images/avatar/amyelsner.png\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Asiya Javayant\" image=\"assets/demo/images/avatar/asiyajavayant.png\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Onyama Limba\" image=\"assets/demo/images/avatar/onyamalimba.png\" styleClass=\"p-mr-2\"></p-chip>\r\n                <p-chip label=\"Xuxue Feng\" image=\"assets/demo/images/avatar/xuxuefeng.png\" [removable]=\"true\"></p-chip>\r\n            </div>\r\n\r\n            <h5>Styling</h5>\r\n            <div class=\"p-d-flex p-ai-center\">\r\n                <p-chip label=\"Action\" styleClass=\"p-mr-2 custom-chip\"></p-chip>\r\n                <p-chip label=\"Comedy\" styleClass=\"p-mr-2 custom-chip\"></p-chip>\r\n                <p-chip label=\"Onyama Limba\" image=\"assets/demo/images/avatar/onyamalimba.png\" styleClass=\"p-mr-2 custom-chip\"></p-chip>\r\n                <p-chip label=\"Xuxue Feng\" image=\"assets/demo/images/avatar/xuxuefeng.png\" [removable]=\"true\" styleClass=\"custom-chip\"></p-chip>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h4>Skeleton</h4>\r\n            <div class=\"custom-skeleton p-p-4\">\r\n                <div class=\"p-d-flex p-mb-3\">\r\n                    <p-skeleton shape=\"circle\" size=\"4rem\" styleClass=\"p-mr-2\"></p-skeleton>\r\n                    <div>\r\n                        <p-skeleton width=\"10rem\" styleClass=\"p-mb-2\"></p-skeleton>\r\n                        <p-skeleton width=\"5rem\" styleClass=\"p-mb-2\"></p-skeleton>\r\n                        <p-skeleton height=\".5rem\"></p-skeleton>\r\n                    </div>\r\n                </div>\r\n                <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\r\n                <div class=\"p-d-flex p-jc-between p-mt-3\">\r\n                    <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\r\n                    <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ffRT":
    /*!*****************************************!*\
      !*** ./src/app/app.footer.component.ts ***!
      \*****************************************/

    /*! exports provided: AppFooterComponent */

    /***/
    function ffRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
        return AppFooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppFooterComponent = function AppFooterComponent(app) {
        _classCallCheck(this, AppFooterComponent);

        this.app = app;
      };

      AppFooterComponent.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }];
      };

      AppFooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: "\n        <div class=\"layout-footer\">\n            <a id=\"footerlogolink\">\n                <img id=\"footer-logo\"\n                     src=\"assets/layout/images/pwhite.png\" width=\"40px\"/>\n            </a>\n            <div class=\"social-icons\">\n                <a href=\"https://github.com/Trxuxv\"><i class=\"pi pi-github\"></i></a>\n            </div>\n        </div>\n    "
      })], AppFooterComponent);
      /***/
    },

    /***/
    "fgiE":
    /*!**********************************************!*\
      !*** ./src/app/demo/service/eventservice.ts ***!
      \**********************************************/

    /*! exports provided: EventService */

    /***/
    function fgiE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EventService = /*#__PURE__*/function () {
        function EventService(http) {
          _classCallCheck(this, EventService);

          this.http = http;
        }

        _createClass(EventService, [{
          key: "getEvents",
          value: function getEvents() {
            return this.http.get('assets/demo/data/scheduleevents.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return EventService;
      }();

      EventService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], EventService);
      /***/
    },

    /***/
    "fkzr":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.main.component.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function fkzr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-wrapper\" [ngClass]=\"{'p-input-filled': app.inputStyle === 'filled', 'p-ripple-disabled': !app.ripple,\r\n        'layout-static': isStatic(),\r\n        'layout-overlay': isOverlay(),\r\n        'layout-overlay-active': overlayMenuActive && isOverlay(),\r\n        'layout-horizontal': isHorizontal(),\r\n        'layout-static-active': !staticMenuDesktopInactive && isStatic(),\r\n        'layout-mobile-active': staticMenuMobileActive,\r\n        'layout-rtl': app.isRTL,\r\n        'layout-rightpanel-active': rightPanelActive}\" [class]=\"'layout-menu-'+ app.menuTheme+ ' layout-topbar-'+ app.topbarTheme\">\r\n\r\n    <app-topbar></app-topbar>\r\n\r\n    <app-rightpanel></app-rightpanel>\r\n\r\n    <div class=\"menu-wrapper\" (click)=\"onMenuClick($event)\">\r\n        <div class=\"layout-menu-container\">\r\n            <app-menu></app-menu>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"layout-main\">\r\n        <app-breadcrumb></app-breadcrumb>\r\n\r\n        <div class=\"layout-content\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <app-footer></app-footer>\r\n    </div>\r\n\r\n    <app-config></app-config>\r\n\r\n    <div *ngIf=\"staticMenuMobileActive\" class=\"layout-mask modal-in\"></div>\r\n\r\n</div>\r\n";
      /***/
    },

    /***/
    "fxZ6":
    /*!**********************************************!*\
      !*** ./src/app/pages/login/login.service.ts ***!
      \**********************************************/

    /*! exports provided: LoginService */

    /***/
    function fxZ6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(http) {
          _classCallCheck(this, LoginService);

          this.http = http;
        }

        _createClass(LoginService, [{
          key: "login",
          value: function login(user, password) {
            return this.http.get('assets/demo/data/people/people.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              var userAuthenticated = data.find(function (x) {
                return x.user == user && x.password == password;
              });

              if (userAuthenticated) {
                localStorage.setItem("token", userAuthenticated.token);
                return userAuthenticated;
              } else {
                localStorage.clear();
                return "User or password invalid.";
              }
            });
          }
        }, {
          key: "getDataUserLoggedIn",
          value: function getDataUserLoggedIn() {
            return this.http.get('assets/demo/data/people/people.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              var token = localStorage.getItem("token");
              var userAuthenticated = data.find(function (x) {
                return x.token == token;
              });
              return userAuthenticated;
            });
          }
        }, {
          key: "getDataUserById",
          value: function getDataUserById(id) {
            return this.http.get('assets/demo/data/people/people.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data.find(function (x) {
                return x.id == id;
              });
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
          }
        }]);

        return LoginService;
      }();

      LoginService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], LoginService);
      /***/
    },

    /***/
    "gitr":
    /*!**************************************************!*\
      !*** ./src/app/demo/view/menusdemo.component.ts ***!
      \**************************************************/

    /*! exports provided: MenusDemoComponent */

    /***/
    function gitr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenusDemoComponent", function () {
        return MenusDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menusdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menusdemo.component.html */
      "l1DX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var MenusDemoComponent = /*#__PURE__*/function () {
        function MenusDemoComponent(breadcrumbService) {
          _classCallCheck(this, MenusDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Menu',
            routerLink: ['/uikit/menu']
          }]);
        }

        _createClass(MenusDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.tieredItems = [{
              label: 'Customers',
              icon: 'pi pi-fw pi-table',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [{
                  label: 'Customer',
                  icon: 'pi pi-fw pi-plus'
                }, {
                  label: 'Duplicate',
                  icon: 'pi pi-fw pi-copy'
                }]
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              icon: 'pi pi-fw pi-shopping-cart',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              icon: 'pi pi-fw pi-envelope',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }, {
              label: 'Profile',
              icon: 'pi pi-fw pi-user',
              items: [{
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
              }, {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
              }]
            }, {
              separator: true
            }, {
              label: 'Quit',
              icon: 'pi pi-fw pi-sign-out'
            }];
            this.items = [{
              label: 'Customers',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus'
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }];
            this.menuItems = [{
              label: 'Save',
              icon: 'pi pi-fw pi-check'
            }, {
              label: 'Update',
              icon: 'pi pi-fw pi-refresh'
            }, {
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
            }, {
              separator: true
            }, {
              label: 'Quit',
              icon: 'pi pi-fw pi-sign-out'
            }];
            this.slideItems = [{
              label: 'Customers',
              icon: 'pi pi-fw pi-table',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus'
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              icon: 'pi pi-fw pi-shopping-cart',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              icon: 'pi pi-fw pi-envelope',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }, {
              label: 'Profile',
              icon: 'pi pi-fw pi-user',
              items: [{
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
              }, {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
              }]
            }];
            this.breadcrumbItems = [];
            this.breadcrumbItems.push({
              label: 'Electronics'
            });
            this.breadcrumbItems.push({
              label: 'Computer'
            });
            this.breadcrumbItems.push({
              label: 'Notebook'
            });
            this.breadcrumbItems.push({
              label: 'Accessories'
            });
            this.breadcrumbItems.push({
              label: 'Backpacks'
            });
            this.breadcrumbItems.push({
              label: 'Item'
            });
            this.tabMenuItems = [{
              label: 'Overview',
              icon: 'pi pi-fw pi-home'
            }, {
              label: 'Members',
              icon: 'pi pi-fw pi-users'
            }, {
              label: 'Sales',
              icon: 'pi pi-fw pi-shopping-cart'
            }, {
              label: 'Profile',
              icon: 'pi pi-fw pi-user'
            }, {
              label: 'Settings',
              icon: 'pi pi-fw pi-cog'
            }];
            this.megaMenuItems = [{
              label: 'Fashion',
              icon: 'pi pi-fw pi-tag',
              items: [[{
                label: 'Women',
                items: [{
                  label: 'Women Item'
                }, {
                  label: 'Women Item'
                }, {
                  label: 'Women Item'
                }]
              }, {
                label: 'Men',
                items: [{
                  label: 'Men Item'
                }, {
                  label: 'Men Item'
                }, {
                  label: 'Men Item'
                }]
              }], [{
                label: 'Kids',
                items: [{
                  label: 'Kids Item'
                }, {
                  label: 'Kids Item'
                }]
              }, {
                label: 'Luggage',
                items: [{
                  label: 'Luggage Item'
                }, {
                  label: 'Luggage Item'
                }, {
                  label: 'Luggage Item'
                }]
              }]]
            }, {
              label: 'Electronics',
              icon: 'pi pi-fw pi-desktop',
              items: [[{
                label: 'Computer',
                items: [{
                  label: 'Computer Item'
                }, {
                  label: 'Computer Item'
                }]
              }, {
                label: 'Camcorder',
                items: [{
                  label: 'Camcorder Item'
                }, {
                  label: 'Camcorder Item'
                }, {
                  label: 'Camcorder Item'
                }]
              }], [{
                label: 'TV',
                items: [{
                  label: 'TV Item'
                }, {
                  label: 'TV Item'
                }]
              }, {
                label: 'Audio',
                items: [{
                  label: 'Audio Item'
                }, {
                  label: 'Audio Item'
                }, {
                  label: 'Audio Item'
                }]
              }], [{
                label: 'Sports.7',
                items: [{
                  label: 'Sports.7.1'
                }, {
                  label: 'Sports.7.2'
                }]
              }]]
            }, {
              label: 'Furniture',
              icon: 'pi pi-fw pi-image',
              items: [[{
                label: 'Living Room',
                items: [{
                  label: 'Living Room Item'
                }, {
                  label: 'Living Room Item'
                }]
              }, {
                label: 'Kitchen',
                items: [{
                  label: 'Kitchen Item'
                }, {
                  label: 'Kitchen Item'
                }, {
                  label: 'Kitchen Item'
                }]
              }], [{
                label: 'Bedroom',
                items: [{
                  label: 'Bedroom Item'
                }, {
                  label: 'Bedroom Item'
                }]
              }, {
                label: 'Outdoor',
                items: [{
                  label: 'Outdoor Item'
                }, {
                  label: 'Outdoor Item'
                }, {
                  label: 'Outdoor Item'
                }]
              }]]
            }, {
              label: 'Sports',
              icon: 'pi pi-fw pi-star-o',
              items: [[{
                label: 'Basketball',
                items: [{
                  label: 'Basketball Item'
                }, {
                  label: 'Basketball Item'
                }]
              }, {
                label: 'Football',
                items: [{
                  label: 'Football Item'
                }, {
                  label: 'Football Item'
                }, {
                  label: 'Football Item'
                }]
              }], [{
                label: 'Tennis',
                items: [{
                  label: 'Tennis Item'
                }, {
                  label: 'Tennis Item'
                }]
              }]]
            }];
            this.panelMenuItems = [{
              label: 'Customers',
              items: [{
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [{
                  label: 'Customer',
                  icon: 'pi pi-fw pi-plus'
                }, {
                  label: 'Duplicate',
                  icon: 'pi pi-fw pi-copy'
                }]
              }, {
                label: 'Edit',
                icon: 'pi pi-fw pi-user-edit'
              }]
            }, {
              label: 'Orders',
              items: [{
                label: 'View',
                icon: 'pi pi-fw pi-list'
              }, {
                label: 'Search',
                icon: 'pi pi-fw pi-search'
              }]
            }, {
              label: 'Shipments',
              items: [{
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
              }, {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
              }, {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
              }]
            }, {
              label: 'Profile',
              items: [{
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
              }, {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
              }]
            }];
            this.stepsItems = [{
              label: 'Personal'
            }, {
              label: 'Seat'
            }, {
              label: 'Payment'
            }, {
              label: 'Confirmation'
            }];
          }
        }]);

        return MenusDemoComponent;
      }();

      MenusDemoComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      MenusDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_menusdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
      })], MenusDemoComponent);
      /***/
    },

    /***/
    "hZ8T":
    /*!*********************************************!*\
      !*** ./src/app/app.rightpanel.component.ts ***!
      \*********************************************/

    /*! exports provided: AppRightPanelComponent */

    /***/
    function hZ8T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRightPanelComponent", function () {
        return AppRightPanelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_rightpanel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.rightpanel.component.html */
      "xrpP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");

      var AppRightPanelComponent = function AppRightPanelComponent(app) {
        _classCallCheck(this, AppRightPanelComponent);

        this.app = app;
        this.checked1 = true;
        this.checked2 = true;
        this.checked3 = false;
        this.checked4 = false;
        this.checked5 = false;
        this.checked6 = false;
        this.checked7 = false;
        this.checked8 = false;
      };

      AppRightPanelComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_3__["AppMainComponent"]
        }];
      };

      AppRightPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rightpanel',
        template: _raw_loader_app_rightpanel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppRightPanelComponent);
      /***/
    },

    /***/
    "ibcK":
    /*!************************************************!*\
      !*** ./src/app/demo/service/productservice.ts ***!
      \************************************************/

    /*! exports provided: ProductService */

    /***/
    function ibcK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductService", function () {
        return ProductService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProductService = /*#__PURE__*/function () {
        function ProductService(http) {
          _classCallCheck(this, ProductService);

          this.http = http;
        }

        _createClass(ProductService, [{
          key: "getProductsSmall",
          value: function getProductsSmall() {
            return this.http.get('assets/demo/data/products-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            return this.http.get('assets/demo/data/products.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProductsMixed",
          value: function getProductsMixed() {
            return this.http.get('assets/demo/data/products-mixed.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }, {
          key: "getProductsWithOrdersSmall",
          value: function getProductsWithOrdersSmall() {
            return this.http.get('assets/demo/data/products-orders-small.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return ProductService;
      }();

      ProductService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], ProductService);
      /***/
    },

    /***/
    "j1Et":
    /*!*************************************************!*\
      !*** ./src/app/demo/view/miscdemo.component.ts ***!
      \*************************************************/

    /*! exports provided: MiscDemoComponent */

    /***/
    function j1Et(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MiscDemoComponent", function () {
        return MiscDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_miscdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./miscdemo.component.html */
      "fbbu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/app.breadcrumb.service */
      "qVin");

      var MiscDemoComponent = /*#__PURE__*/function () {
        function MiscDemoComponent(breadcrumbService) {
          _classCallCheck(this, MiscDemoComponent);

          this.breadcrumbService = breadcrumbService;
          this.value = 0;
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Misc',
            routerLink: ['/uikit/misc']
          }]);
        }

        _createClass(MiscDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            var interval = setInterval(function () {
              _this19.value = _this19.value + Math.floor(Math.random() * 10) + 1;

              if (_this19.value >= 100) {
                _this19.value = 100;
                clearInterval(interval);
              }
            }, 2000);
          }
        }]);

        return MiscDemoComponent;
      }();

      MiscDemoComponent.ctorParameters = function () {
        return [{
          type: src_app_app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      MiscDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_miscdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["\n\t\t:host ::ng-deep .misc-demo .p-button.p-widget {\n\t\t    min-width: 6rem;\n\t    }\n\n\t\t:host ::ng-deep .misc-demo .badges .p-badge {\n\t\t    margin-right: .5rem;\n\t\t}\n\n\t\t:host ::ng-deep .misc-demo .badges .p-tag {\n\t\t\tmargin-right: .5rem;\n\t\t}\n\n        :host ::ng-deep .p-chip.custom-chip {\n            background: var(--primary-color);\n            color: var(--primary-color-text);\n        }\n\n        :host ::ng-deep .custom-scrolltop{\n            width: 2rem;\n            height: 2rem;\n            border-radius: 4px;\n            background-color: var(--primary-color);\n        }\n\n        :host ::ng-deep .custom-scrolltop .p-scrolltop-icon {\n            font-size: 1rem;\n            color: var(--primary-color-text);\n        }\n\n        :host ::ng-deep .custom-scrolltop:hover {\n             background-color: var(--primary-color);\n        }\n\n        :host ::ng-deep  .custom-skeleton {\n            border: 1px solid var(--surface-d);\n            border-borderRadius: 4px;\n        }\n\n        :host ::ng-deep  .custom-skeleton ul {\n            list-style: none;\n        }\n    "]
      })], MiscDemoComponent);
      /***/
    },

    /***/
    "jaM/":
    /*!*****************************************!*\
      !*** ./src/app/app.config.component.ts ***!
      \*****************************************/

    /*! exports provided: AppConfigComponent */

    /***/
    function jaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfigComponent", function () {
        return AppConfigComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");

      var AppConfigComponent = /*#__PURE__*/function () {
        function AppConfigComponent(appMain, app) {
          _classCallCheck(this, AppConfigComponent);

          this.appMain = appMain;
          this.app = app;
          this.theme = 'apple';
        }

        _createClass(AppConfigComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.themes = [{
              name: 'denim',
              color: '#2f8ee5'
            }, {
              name: 'sea-green',
              color: '#30A059'
            }, {
              name: 'amethyst',
              color: '#834CA8'
            }, {
              name: 'wedgewood',
              color: '#557DAA'
            }, {
              name: 'tapestry',
              color: '#A74896'
            }, {
              name: 'cape-palliser',
              color: '#A46B3E'
            }, {
              name: 'apple',
              color: '#52A235'
            }, {
              name: 'gigas',
              color: '#5751A9'
            }, {
              name: 'jungle-green',
              color: '#2B9F9C'
            }, {
              name: 'camelot',
              color: '#A54357'
            }, {
              name: 'amber',
              color: '#D49341'
            }, {
              name: 'cyan',
              color: '#399DB2'
            }];
          }
        }, {
          key: "onLayoutModeChange",
          value: function onLayoutModeChange(event) {
            this.app.menuTheme = this.app.layoutMode;
            this.app.topbarTheme = this.app.layoutMode;
            var layoutLink = document.getElementById('layout-css');
            var layoutHref = 'assets/layout/css/layout-' + this.app.layoutMode + '.css';
            this.replaceLink(layoutLink, layoutHref);
            var themeLink = document.getElementById('theme-css');
            var urlTokens = themeLink.getAttribute('href').split('/');
            urlTokens[urlTokens.length - 1] = 'theme-' + this.app.layoutMode + '.css';
            var newURL = urlTokens.join('/');
            this.replaceLink(themeLink, newURL, this.appMain['refreshTrafficChart']);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            this.theme = theme;
            var themeLink = document.getElementById('theme-css');
            var themeHref = 'assets/theme/' + theme + '/theme-' + this.app.layoutMode + '.css';
            this.replaceLink(themeLink, themeHref, this.appMain['refreshTrafficChart']);
          }
        }, {
          key: "isIE",
          value: function isIE() {
            return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
          }
        }, {
          key: "replaceLink",
          value: function replaceLink(linkElement, href, callback) {
            if (this.isIE()) {
              linkElement.setAttribute('href', href);

              if (callback) {
                callback();
              }
            } else {
              var id = linkElement.getAttribute('id');
              var cloneLinkElement = linkElement.cloneNode(true);
              cloneLinkElement.setAttribute('href', href);
              cloneLinkElement.setAttribute('id', id + '-clone');
              linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
              cloneLinkElement.addEventListener('load', function () {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);

                if (callback) {
                  callback();
                }
              });
            }
          }
        }, {
          key: "onConfigButtonClick",
          value: function onConfigButtonClick(event) {
            this.appMain.configActive = !this.appMain.configActive;
            this.appMain.configClick = true;
            event.preventDefault();
          }
        }]);

        return AppConfigComponent;
      }();

      AppConfigComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_3__["AppMainComponent"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }];
      };

      AppConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-config',
        template: "\n        <div id=\"layout-config\" class=\"layout-config\" [ngClass]=\"{'layout-config-active': appMain.configActive}\" (click)=\"appMain.onConfigClick($event)\">\n            <a style=\"cursor: pointer\" id=\"layout-config-button\" class=\"layout-config-button\" (click)=\"onConfigButtonClick($event)\">\n                <i class=\"pi pi-cog\"></i>\n            </a>\n            <div class=\"layout-config-content\">\n                <div class=\"layout-config-form\" id=\"config-form\">\n                    <div class=\"layout-config-header\">\n                        <h5>Theme Customization</h5>\n                        <span>Poseidon offers different themes for layout, topbar, menu etc.</span>\n                    </div>\n\n                    <div id=\"lightdark-panel\" class=\"layout-config-section options\">\n                        <h6>Color Mode</h6>\n                        <div class=\"p-d-flex p-jc-between\">\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"layoutMode\" value=\"light\" [(ngModel)]=\"app.layoutMode\" inputId=\"layoutMode1\" (onClick)=\"onLayoutModeChange($event)\"></p-radioButton>\n                                <label for=\"layoutMode1\" class=\"p-ml-2\">Light</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"layoutMode\" value=\"dark\" [(ngModel)]=\"app.layoutMode\" inputId=\"layoutMode2\" (onClick)=\"onLayoutModeChange($event)\"></p-radioButton>\n                                <label for=\"layoutMode2\" class=\"p-ml-2\">Dark</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"layoutMode\" value=\"dim\" [(ngModel)]=\"app.layoutMode\" inputId=\"layoutMode3\" (onClick)=\"onLayoutModeChange($event)\"></p-radioButton>\n                                <label for=\"layoutMode3\" class=\"p-ml-2\">Dim</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"menumodes-panel\" class=\"layout-config-section options\">\n                        <h6 class=\"p-mt-2\">Menu Mode</h6>\n                        <div class=\"p-d-flex p-jc-between\">\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"menuMode\" value=\"static\" [(ngModel)]=\"app.menuMode\" inputId=\"menuMode1\"></p-radioButton>\n                                <label for=\"menuMode1\" class=\"p-ml-2\">Static</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"menuMode\" value=\"overlay\" [(ngModel)]=\"app.menuMode\" inputId=\"menuMode2\"></p-radioButton>\n                                <label for=\"menuMode2\" class=\"p-ml-2\">Overlay</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"menuMode\" value=\"horizontal\" [(ngModel)]=\"app.menuMode\" inputId=\"menuMode3\"></p-radioButton>\n                                <label for=\"menuMode3\" class=\"p-ml-2\">Horizontal</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"menuthemes-panel\" class=\"layout-config-section options\">\n                        <h6 class=\"p-mt-2\">Menu Theme</h6>\n                        <div class=\"p-d-flex p-jc-between\">\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"menuTheme\" [disabled]=\"app.layoutMode !== 'light'\" value=\"light\" [(ngModel)]=\"app.menuTheme\" inputId=\"menuTheme1\"></p-radioButton>\n                                <label for=\"menuTheme1\" class=\"p-ml-2\">Light</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"menuTheme\" [disabled]=\"app.layoutMode !== 'light'\" value=\"dark\" [(ngModel)]=\"app.menuTheme\" inputId=\"menuTheme2\"></p-radioButton>\n                                <label for=\"menuTheme2\" class=\"p-ml-2\">Dark</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"menuTheme\" [disabled]=\"app.layoutMode !== 'light'\" value=\"dim\" [(ngModel)]=\"app.menuTheme\" inputId=\"menuTheme3\"></p-radioButton>\n                                <label for=\"menuTheme3\" class=\"p-ml-2\">Dim</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"topbarthemes-panel\" class=\"layout-config-section options\">\n                        <h6 class=\"p-mt-2\">TopBar Mode</h6>\n                        <div class=\"p-d-flex p-jc-between\">\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"topbarTheme\" [disabled]=\"app.layoutMode !== 'light'\" value=\"light\" [(ngModel)]=\"app.topbarTheme\" inputId=\"topbarTheme1\"></p-radioButton>\n                                <label for=\"topbarTheme1\" class=\"p-ml-2\">Light</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"topbarTheme\" [disabled]=\"app.layoutMode !== 'light'\" value=\"dark\" [(ngModel)]=\"app.topbarTheme\" inputId=\"topbarTheme2\"></p-radioButton>\n                                <label for=\"topbarTheme2\" class=\"p-ml-2\">Dark</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"topbarTheme\" [disabled]=\"app.layoutMode !== 'light'\" value=\"dim\" [(ngModel)]=\"app.topbarTheme\" inputId=\"topbarTheme3\"></p-radioButton>\n                                <label for=\"topbarTheme3\" class=\"p-ml-2\">Dim</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"outlined-panel\" class=\"layout-config-section options\">\n                        <h6 class=\"p-mt-2\">Input Background</h6>\n                        <div class=\"p-d-flex p-jc-between\">\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"inputStyle\" value=\"outlined\" [(ngModel)]=\"app.inputStyle\" inputId=\"inputStyle1\"></p-radioButton>\n                                <label for=\"inputStyle1\" class=\"p-ml-2\">Outlined</label>\n                            </div>\n                            <div class=\"p-d-flex p-ai-center\">\n                                <p-radioButton name=\"inputStyle\" value=\"filled\" [(ngModel)]=\"app.inputStyle\" inputId=\"inputStyle2\"></p-radioButton>\n                                <label for=\"inputStyle2\" class=\"p-ml-2\">Filled</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div id=\"ripple-panel\" class=\"layout-config-section ripple\">\n                        <h6 class=\"p-mt-2\">Ripple Effect</h6>\n                        <p-inputSwitch [ngModel]=\"app.ripple\" (onChange)=\"appMain.onRippleChange($event)\"></p-inputSwitch>\n                    </div>\n\n                    <div id=\"orientation-panel\" class=\"layout-config-section dark\">\n                        <h6 class=\"p-mt-2\">RTL</h6>\n                        <p-inputSwitch [ngModel]=\"app.isRTL\" (onChange)=\"appMain.onRTLChange($event)\"></p-inputSwitch>\n                    </div>\n\n                    <div id=\"componentthemes-panel\" class=\"layout-config-section colors\">\n                        <h6 class=\"p-mt-2\">Component Themes</h6>\n                        <div class=\"p-grid layout-config-colors\">\n                            <div *ngFor=\"let t of themes\" class=\"p-col p-col-fixed\">\n                                <a style=\"cursor: pointer\" (click)=\"changeTheme(t.name)\" class=\"layout-config-option\">\n                                    <span class=\"layout-config-option-color\" [ngStyle]=\"{'background-color': t.color}\"></span>\n                                    <span class=\"layout-config-option-check-mask\" *ngIf=\"theme === t.name\">\n                                        <i class=\"pi pi-check\"></i>\n                                    </span>\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n    "
      })], AppConfigComponent);
      /***/
    },

    /***/
    "kA7y":
    /*!*******************************************!*\
      !*** ./src/app/app.menuitem.component.ts ***!
      \*******************************************/

    /*! exports provided: AppMenuitemComponent */

    /***/
    function kA7y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMenuitemComponent", function () {
        return AppMenuitemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");

      var AppMenuitemComponent = /*#__PURE__*/function () {
        function AppMenuitemComponent(app, router, cd, menuService) {
          var _this20 = this;

          _classCallCheck(this, AppMenuitemComponent);

          this.app = app;
          this.router = router;
          this.cd = cd;
          this.menuService = menuService;
          this.active = false;
          this.menuSourceSubscription = this.menuService.menuSource$.subscribe(function (key) {
            // deactivate current active menu
            if (_this20.active && _this20.key !== key && key.indexOf(_this20.key) !== 0) {
              _this20.active = false;
            }
          });
          this.menuResetSubscription = this.menuService.resetSource$.subscribe(function () {
            _this20.active = false;
          });
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          })).subscribe(function (params) {
            if (_this20.app.isHorizontal()) {
              _this20.active = false;
            } else {
              if (_this20.item.routerLink) {
                _this20.updateActiveStateFromRoute();
              } else {
                _this20.active = false;
              }
            }
          });
        }

        _createClass(AppMenuitemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.app.isHorizontal() && this.item.routerLink) {
              this.updateActiveStateFromRoute();
            }

            this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
          }
        }, {
          key: "updateActiveStateFromRoute",
          value: function updateActiveStateFromRoute() {
            this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
          }
        }, {
          key: "itemClick",
          value: function itemClick(event) {
            // avoid processing disabled items
            if (this.item.disabled) {
              event.preventDefault();
              return true;
            } // navigate with hover in horizontal mode


            if (this.root) {
              this.app.menuHoverActive = !this.app.menuHoverActive;
            } // notify other items


            this.menuService.onMenuStateChange(this.key); // execute command

            if (this.item.command) {
              this.item.command({
                originalEvent: event,
                item: this.item
              });
            } // toggle active state


            if (this.item.items) {
              this.active = !this.active;
            } else {
              // activate item
              this.active = true; // reset horizontal menu

              if (this.app.isHorizontal()) {
                this.menuService.reset();
                this.app.menuHoverActive = false;
              }

              this.app.overlayMenuActive = false;
              this.app.staticMenuMobileActive = false;
            }
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            // activate item on hover
            if (this.root && this.app.isHorizontal() && this.app.isDesktop()) {
              if (this.app.menuHoverActive) {
                this.menuService.onMenuStateChange(this.key);
                this.active = true;
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.menuSourceSubscription) {
              this.menuSourceSubscription.unsubscribe();
            }

            if (this.menuResetSubscription) {
              this.menuResetSubscription.unsubscribe();
            }
          }
        }]);

        return AppMenuitemComponent;
      }();

      AppMenuitemComponent.ctorParameters = function () {
        return [{
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_6__["AppMainComponent"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _app_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"]
        }];
      };

      AppMenuitemComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        root: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        parentKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      AppMenuitemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        /* tslint:disable:component-selector */
        selector: '[app-menuitem]',

        /* tslint:enable:component-selector */
        template: "\n        <ng-container>\n            <div *ngIf=\"root\">\n                <span class=\"layout-menuitem-text\">{{item.label}}</span>\n            </div>\n            <a [attr.href]=\"item.url\" (click)=\"itemClick($event)\" *ngIf=\"!item.routerLink || item.items\" (keydown.enter)=\"itemClick($event)\"\n               [attr.target]=\"item.target\" [attr.tabindex]=\"0\" [ngClass]=\"item.class\" (mouseenter)=\"onMouseEnter()\" pRipple>\n                <i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n                <span class=\"layout-menuitem-text\">{{item.label}}</span>\n                <i class=\"pi pi-fw pi-angle-down layout-submenu-toggler\" *ngIf=\"item.items\"></i>\n            </a>\n            <a (click)=\"itemClick($event)\" *ngIf=\"item.routerLink && !item.items\"\n               [routerLink]=\"item.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" [routerLinkActiveOptions]=\"{exact: true}\"\n               [attr.target]=\"item.target\" [attr.tabindex]=\"0\" [ngClass]=\"item.class\" (mouseenter)=\"onMouseEnter()\" pRipple>\n                <i [ngClass]=\"item.icon\" class=\"layout-menuitem-icon\"></i>\n                <span class=\"layout-menuitem-text\">{{item.label}}</span>\n                <i class=\"pi pi-fw pi-angle-down layout-submenu-toggler\" *ngIf=\"item.items\"></i>\n            </a>\n            <div class=\"layout-menu-tooltip\">\n                <div class=\"layout-menu-tooltip-arrow\"></div>\n                <div class=\"layout-menu-tooltip-text\">{{item.label}}</div>\n            </div>\n            <ul *ngIf=\"(item.items && root) || (item.items && active)\" [@children]=\"root ? 'visible' : active ? 'visibleAnimated' : 'hiddenAnimated'\">\n                <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"item.items\">\n                    <li app-menuitem [item]=\"child\" [index]=\"i\" [parentKey]=\"key\" [class]=\"child.badgeClass\"></li>\n                </ng-template>\n            </ul>\n        </ng-container>\n    ",
        host: {
          '[class.layout-root-menuitem]': 'root || active',
          '[class.active-menuitem]': '(active)'
        },
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('children', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px',
          padding: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px',
          padding: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          height: '0px',
          padding: '0px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => visibleAnimated, visibleAnimated => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))])]
      })], AppMenuitemComponent);
      /***/
    },

    /***/
    "l1DX":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/menusdemo.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function l1DX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>MenuBar</h5>\r\n            <p-menubar [model]=\"tieredItems\">\r\n                <ng-template pTemplate=\"end\">\r\n                    <span class=\"p-input-icon-right\">\r\n                        <input type=\"text\" pInputText placeholder=\"Search\">\r\n                        <i class=\"pi pi-search\"></i>\r\n                    </span>\r\n                </ng-template>\r\n            </p-menubar>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12\">\r\n        <div class=\"card\">\r\n            <h5>Breadcrumb</h5>\r\n            <p-breadcrumb [model]=\"breadcrumbItems\" [home]=\"{icon: 'pi pi-home'}\"></p-breadcrumb>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-6\">\r\n        <div class=\"card\">\r\n            <h5>Steps</h5>\r\n            <p-steps [model]=\"stepsItems\" [activeIndex]=\"1\"></p-steps>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-6\">\r\n        <div class=\"card\">\r\n            <h5>TabMenu</h5>\r\n            <p-tabMenu [model]=\"tabMenuItems\" [activeItem]=\"tabMenuItems[0]\"></p-tabMenu>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-4\">\r\n        <div class=\"card\">\r\n            <h5>TieredMenu</h5>\r\n            <p-tieredMenu [model]=\"tieredItems\" [style]=\"{'width':'100%','margin-bottom':'20px'}\"></p-tieredMenu>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5>MenuButton</h5>\r\n            <p-menu #menu [popup]=\"true\" [model]=\"menuItems\" [style]=\"{'width':'250px'}\"></p-menu>\r\n            <button type=\"button\" pButton icon=\"pi pi-chevron-down\" label=\"Options\" (click)=\"menu.toggle($event)\" style=\"width:auto\"></button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-4\">\r\n        <div class=\"card\">\r\n            <h5>Plain Menu</h5>\r\n            <p-menu [model]=\"items\" [style]=\"{'width':'100%'}\"></p-menu>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-4\">\r\n        <div class=\"card\">\r\n            <h5>ContextMenu</h5>\r\n            Right click to display.\r\n\r\n            <p-contextMenu [global]=\"true\" [model]=\"menuItems\"></p-contextMenu>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5>SlideMenu</h5>\r\n            <p-slideMenu [model]=\"slideItems\" [viewportHeight]=\"250\" [menuWidth]=\"175\"></p-slideMenu>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-md-6\">\r\n        <div class=\"card\">\r\n            <h5>MegaMenu - Horizontal</h5>\r\n            <p-megaMenu [model]=\"megaMenuItems\"></p-megaMenu>\r\n\r\n            <h5>MegaMenu - Vertical</h5>\r\n            <p-megaMenu [model]=\"megaMenuItems\" orientation=\"vertical\" [style]=\"{'width':'200px'}\"></p-megaMenu>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"p-col-12 p-md-6\">\r\n        <div class=\"card\">\r\n            <h5>PanelMenu</h5>\r\n            <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "m++p":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/typography.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid typography-demo\">\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h1>Heading 1</h1>\r\n\t\t\t<h2>Heading 2</h2>\r\n\t\t\t<h3>Heading 3</h3>\r\n\t\t\t<h4>Heading 4</h4>\r\n\t\t\t<h5>Heading 5</h5>\r\n\t\t\t<h6>Heading 6</h6>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Blockquote</h4>\r\n\t\t\t<blockquote>Libero voluptatum atque exercitationem praesentium provident odit aperiam.</blockquote>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Paragraph</h4>\r\n\t\t\t<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatum atque\r\n\t\t\t\texercitationem praesentium provident odit aperiam, vitae fugit\r\n\t\t\t\tdolores nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</p>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Text Styles</h4>\r\n\t\t\t<p><mark>Highlight</mark> text.</p>\r\n\t\t\t<p><del>Deleted text.</del></p>\r\n\t\t\t<p><u>Underlined Text</u></p>\r\n\t\t\t<p><small>Small text.</small></p>\r\n\t\t\t<p><strong>Bold text.</strong></p>\r\n\t\t\t<p><em>Italic Text.</em></p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "mOOp":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/buttondemo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mOOp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid button-demo\">\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Default</h5>\r\n\t\t\t<p-button label=\"Submit\" class=\"p-mr-2 p-mb-2\"></p-button>\r\n\t\t\t<p-button label=\"Disabled\" disabled=\"true\" class=\"p-mr-2 p-mb-2\"></p-button>\r\n\t\t\t<p-button label=\"Link\" styleClass=\"p-button-link p-mr-2\"></p-button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Severities</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-secondary p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-success p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-info p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-warning p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-help p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-danger p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Text</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-secondary p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-success p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-info p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-warning p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-help p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-danger p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Plain\" class=\"p-button-text p-button-plain p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Outlined</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-outlined p-button-secondary p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-outlined p-button-success p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-outlined p-button-info p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-outlined p-button-warning p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-outlined p-button-help p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-outlined p-button-danger p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Button Set</h5>\r\n\t\t\t<span class=\"p-buttonset\">\r\n\t\t\t\t<button pButton pRipple label=\"Save\" icon=\"pi pi-check\"></button>\r\n\t\t\t\t<button pButton pRipple label=\"Delete\" icon=\"pi pi-trash\"></button>\r\n\t\t\t\t<button pButton pRipple label=\"Cancel\" icon=\"pi pi-times\"></button>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>SplitButton</h5>\r\n\t\t\t<p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-info p-mr-2 p-mb-2\"></p-splitButton>\r\n\t\t\t<p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-success p-mr-2 p-mb-2\"></p-splitButton>\r\n\t\t\t<p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-warning p-mr-2 p-mb-2\"></p-splitButton>\r\n\t\t\t<p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-help p-mr-2 p-mb-2\"></p-splitButton>\r\n\t\t\t<p-splitButton label=\"Save\" icon=\"pi pi-plus\" [model]=\"items\" styleClass=\"p-button-danger p-mr-2 p-mb-2\"></p-splitButton>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Icons</h5>\r\n\t\t\t<p-button icon=\"pi pi-star\" class=\"p-mr-2 p-mb-2\"></p-button>\r\n\t\t\t<p-button label=\"Submit\" icon=\"pi pi-bookmark\" class=\"p-mr-2 p-mb-2\"></p-button>\r\n\t\t\t<p-button label=\"Submit\" icon=\"pi pi-bookmark\" iconPos=\"right\" class=\"p-mr-2 p-mb-2\"></p-button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Raised</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-raised p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-raised p-button-secondary p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-raised p-button-success p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-raised p-button-info p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-raised p-button-warning p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-raised p-button-help p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-raised p-button-danger p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Rounded</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Primary\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Secondary\" class=\"p-button-rounded p-button-secondary p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Success\" class=\"p-button-rounded p-button-success p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Info\" class=\"p-button-rounded p-button-info p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Warning\" class=\"p-button-rounded p-button-warning p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Help\" class=\"p-button-rounded p-button-help p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" label=\"Danger\" class=\"p-button-rounded p-button-danger p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Rounded Icons</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-button-rounded p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-bookmark\" class=\"p-button-rounded p-button-secondary p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-search\" class=\"p-button-rounded p-button-success p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-user\" class=\"p-button-rounded p-button-info p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-bell\" class=\"p-button-rounded p-button-warning p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-heart\" class=\"p-button-rounded p-button-help p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-times\" class=\"p-button-rounded p-button-danger p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Rounded Text</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-button-rounded p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-bookmark\" class=\"p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-search\" class=\"p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-user\" class=\"p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-bell\" class=\"p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-heart\" class=\"p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-times\" class=\"p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-filter\" class=\"p-button-rounded p-button-text p-button-plain p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Rounded Outlined</h5>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-check\" class=\"p-button-rounded p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-bookmark\" class=\"p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-search\" class=\"p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-user\" class=\"p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-bell\" class=\"p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-heart\" class=\"p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t\t<button pButton pRipple type=\"button\" icon=\"pi pi-times\" class=\"p-button-rounded p-button-danger p-button-outlined p-mr-2 p-mb-2\"></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "mqcR":
    /*!***************************************!*\
      !*** ./src/app/app.main.component.ts ***!
      \***************************************/

    /*! exports provided: AppMainComponent */

    /***/
    function mqcR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppMainComponent", function () {
        return AppMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.main.component.html */
      "fkzr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.menu.service */
      "axq9");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");

      var AppMainComponent = /*#__PURE__*/function () {
        function AppMainComponent(renderer, menuService, primengConfig, app) {
          _classCallCheck(this, AppMainComponent);

          this.renderer = renderer;
          this.menuService = menuService;
          this.primengConfig = primengConfig;
          this.app = app;
          this.menuHoverActive = false;
          this.searchClick = false;
          this.search = false;
        }

        _createClass(AppMainComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this21 = this;

            // hides the horizontal submenus or top menu if outside is clicked
            this.documentClickListener = this.renderer.listen('body', 'click', function (event) {
              if (!_this21.topbarItemClick) {
                _this21.activeTopbarItem = null;
                _this21.topbarMenuActive = false;
              }

              if (!_this21.menuClick && _this21.isHorizontal()) {
                _this21.menuService.reset();
              }

              if (_this21.configActive && !_this21.configClick) {
                _this21.configActive = false;
              }

              if (!_this21.rightPanelClick) {
                _this21.rightPanelActive = false;
              }

              if (!_this21.menuClick) {
                if (_this21.overlayMenuActive) {
                  _this21.overlayMenuActive = false;
                }

                if (_this21.staticMenuMobileActive) {
                  _this21.staticMenuMobileActive = false;
                }

                _this21.menuHoverActive = false;

                _this21.unblockBodyScroll();
              }

              if (!_this21.searchClick) {
                _this21.search = false;
              }

              _this21.searchClick = false;
              _this21.configClick = false;
              _this21.topbarItemClick = false;
              _this21.menuClick = false;
              _this21.rightPanelClick = false;
            });
          }
        }, {
          key: "onMenuButtonClick",
          value: function onMenuButtonClick(event) {
            this.rotateMenuButton = !this.rotateMenuButton;
            this.topbarMenuActive = false;
            this.menuClick = true;

            if (this.app.menuMode === 'overlay' && !this.isMobile()) {
              this.overlayMenuActive = !this.overlayMenuActive;
            }

            if (this.isDesktop()) {
              this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            } else {
              this.staticMenuMobileActive = !this.staticMenuMobileActive;

              if (this.staticMenuMobileActive) {
                this.blockBodyScroll();
              } else {
                this.unblockBodyScroll();
              }
            }

            event.preventDefault();
          }
        }, {
          key: "onMenuClick",
          value: function onMenuClick($event) {
            this.menuClick = true;
          }
        }, {
          key: "onTopbarItemClick",
          value: function onTopbarItemClick(event, item) {
            this.topbarItemClick = true;

            if (this.activeTopbarItem === item) {
              this.activeTopbarItem = null;
            } else {
              this.activeTopbarItem = item;
            }

            if (item.className === 'search-item topbar-item') {
              this.search = !this.search;
              this.searchClick = !this.searchClick;
            }

            event.preventDefault();
          }
        }, {
          key: "onTopbarSubItemClick",
          value: function onTopbarSubItemClick(event) {
            event.preventDefault();
          }
        }, {
          key: "onRTLChange",
          value: function onRTLChange(event) {
            this.app.isRTL = event.checked;
          }
        }, {
          key: "onRippleChange",
          value: function onRippleChange(event) {
            this.app.ripple = event.checked;
            this.primengConfig.ripple = event.checked;
          }
        }, {
          key: "onConfigClick",
          value: function onConfigClick(event) {
            this.configClick = true;
          }
        }, {
          key: "onRightPanelButtonClick",
          value: function onRightPanelButtonClick(event) {
            this.rightPanelClick = true;
            this.rightPanelActive = !this.rightPanelActive;
            event.preventDefault();
          }
        }, {
          key: "onRightPanelClick",
          value: function onRightPanelClick() {
            this.rightPanelClick = true;
          }
        }, {
          key: "isTablet",
          value: function isTablet() {
            var width = window.innerWidth;
            return width <= 1024 && width > 640;
          }
        }, {
          key: "isDesktop",
          value: function isDesktop() {
            return window.innerWidth > 1024;
          }
        }, {
          key: "isMobile",
          value: function isMobile() {
            return window.innerWidth <= 640;
          }
        }, {
          key: "isOverlay",
          value: function isOverlay() {
            return this.app.menuMode === 'overlay';
          }
        }, {
          key: "isStatic",
          value: function isStatic() {
            return this.app.menuMode === 'static';
          }
        }, {
          key: "isHorizontal",
          value: function isHorizontal() {
            return this.app.menuMode === 'horizontal';
          }
        }, {
          key: "blockBodyScroll",
          value: function blockBodyScroll() {
            if (document.body.classList) {
              document.body.classList.add('blocked-scroll');
            } else {
              document.body.className += ' blocked-scroll';
            }
          }
        }, {
          key: "unblockBodyScroll",
          value: function unblockBodyScroll() {
            if (document.body.classList) {
              document.body.classList.remove('blocked-scroll');
            } else {
              document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.documentClickListener) {
              this.documentClickListener();
            }
          }
        }]);

        return AppMainComponent;
      }();

      AppMainComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _app_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeNGConfig"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        }];
      };

      AppMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main',
        template: _raw_loader_app_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppMainComponent);
      /***/
    },

    /***/
    "p563":
    /*!************************************************!*\
      !*** ./src/app/utilities/spacing.component.ts ***!
      \************************************************/

    /*! exports provided: SpacingComponent */

    /***/
    function p563(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpacingComponent", function () {
        return SpacingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spacing_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spacing.component.html */
      "pl9w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var SpacingComponent = function SpacingComponent(breadcrumbService) {
        _classCallCheck(this, SpacingComponent);

        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([{
          label: 'Utilities'
        }, {
          label: 'Spacing',
          routerLink: ['/utilities/spacing']
        }]);
      };

      SpacingComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      SpacingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_spacing_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["i:not([class~=\"pi\"]) {\n        background-color: var(--surface-b);\n        color: var(--primary-color);\n        font-family: Monaco, courier, monospace;\n        font-style: normal;\n        font-size: 12px;\n        padding: 2px 4px;\n        letter-spacing: .5px;\n        border-radius: 3px;\n        font-weight: 600;\n        margin: 0 2px;\n    }"]
      })], SpacingComponent);
      /***/
    },

    /***/
    "pRB7":
    /*!*****************************************************!*\
      !*** ./src/app/pages/app.accessdenied.component.ts ***!
      \*****************************************************/

    /*! exports provided: AppAccessdeniedComponent */

    /***/
    function pRB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppAccessdeniedComponent", function () {
        return AppAccessdeniedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_accessdenied_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.accessdenied.component.html */
      "KaQX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppAccessdeniedComponent = function AppAccessdeniedComponent() {
        _classCallCheck(this, AppAccessdeniedComponent);
      };

      AppAccessdeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-accessdenied',
        template: _raw_loader_app_accessdenied_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppAccessdeniedComponent);
      /***/
    },

    /***/
    "pl9w":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/spacing.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function pl9w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid spacing-demo\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Spacing</h4>\r\n\t\t\t<p><a [routerLink]=\"['/grid']\">PrimeFlex</a> provides various spacing utilities to modify\r\n\t\t\t\tan element's layout.</p>\r\n\r\n\t\t\t<h5>Classes</h5>\r\n\t\t\t<p>The spacing classes use the <i>p-&#123;property&#125;&#123;position&#125;-&#123;value&#125;</i> syntax whereas for responsive\r\n\t\t\t\tvalues <i>p-&#123;property&#125;&#123;position&#125;-&#123;breakpoint&#125;-&#123;value&#125;</i> format is used.</p>\r\n\r\n\t\t\t<h5>Property</h5>\r\n\t\t\t<p>Property can either be a margin or a padding.</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><b>m</b>: margin</li>\r\n\t\t\t\t<li><b>p</b>: padding</li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<h5>Position</h5>\r\n\t\t\t<p>Position are available for the individual sides, the x-y axis or blank for the shortand of all sides.</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><b>t</b>: top</li>\r\n\t\t\t\t<li><b>b</b>: bottom</li>\r\n\t\t\t\t<li><b>l</b>: left</li>\r\n\t\t\t\t<li><b>r</b>: right</li>\r\n\t\t\t\t<li><b>x</b>: left and right</li>\r\n\t\t\t\t<li><b>y</b>: top and bottom</li>\r\n\t\t\t\t<li><b>blank</b>: all sides</li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<h5>Value</h5>\r\n\t\t\t<p>Value field varies from 0 to 6 where default value of the <i>$spacer</i> is 1rem. The special <i>auto</i> value is available to margins only and used to center elements.</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><b>0</b>: $spacer * 0</li>\r\n\t\t\t\t<li><b>1</b>: $spacer * .25</li>\r\n\t\t\t\t<li><b>2</b>: $spacer * .5</li>\r\n\t\t\t\t<li><b>3</b>: $spacer * 1</li>\r\n\t\t\t\t<li><b>4</b>: $spacer * 1.5</li>\r\n\t\t\t\t<li><b>5</b>: $spacer * 2</li>\r\n\t\t\t\t<li><b>6</b>: $spacer * 3</li>\r\n\t\t\t\t<li><b>auto</b>: auto margin</li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<h5>Breakpoint</h5>\r\n\t\t\t<p>Breakpoints define how the spacing should be defined depending on the screen size. Design is mobile first so smaller values\r\n\t\t\t\tcan also apply to larger values e.g. md also applies to lg or xl if they are not explicitly defined.</p>\r\n\t\t\t<ul>\r\n\t\t\t\t<li><b>sm</b>: small screens e.g. phones</li>\r\n\t\t\t\t<li><b>md</b>: medium screens e.g. tablets</li>\r\n\t\t\t\t<li><b>lg</b>: large screens e.g. notebooks</li>\r\n\t\t\t\t<li><b>xl</b>: larger screens .e.g monitors</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Use Case 1</h5>\r\n\t\t\t<p>Spacing is a handy utility when elements wrap when screen size get smaller. In example below, when buttons wrap\r\n\t\t\t\tthey are displayed on top of each other whereas with spacing this issue can easily be resolved.\r\n\t\t\t</p>\r\n\r\n\t\t\t<h6>Without Spacing</h6>\r\n\t\t\t<button pButton type=\"button\" label=\"Button 1\" style=\"width:250px\" ></button>\r\n\t\t\t<button pButton type=\"button\" label=\"Button 2\" style=\"width:250px\" ></button>\r\n\r\n\t\t\t<h6>With Spacing</h6>\r\n\t\t\t<button pButton type=\"button\" label=\"Button 1\" style=\"width:250px\" class=\"p-mr-2 p-mb-2\" ></button>\r\n\t\t\t<button pButton type=\"button\" label=\"Button 2\" style=\"width:250px\" class=\"p-mr-2\"></button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"p-col-12 p-md-6\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h5>Use Case 2</h5>\r\n\t\t\t<p>Spacing utilities also work seamlessly with responsive PrimeFlex grid utilty. Example below demonstrates a case where on a smaller screen inputs receive a margin to position themselves\r\n\t\t\t\tseparately in stacked mode, reduce the dimension of the window to view the difference.\r\n\t\t\t</p>\r\n\r\n\t\t\t<h6>Without Spacing</h6>\r\n\t\t\t<div class=\"p-grid p-formgrid p-fluid\">\r\n\t\t\t\t<div class=\"p-col-12 p-lg-4\">\r\n\t\t\t\t\t<input pInputText />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-lg-4\">\r\n\t\t\t\t\t<input pInputText />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-lg-4\">\r\n\t\t\t\t\t<input pInputText />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h6>With Spacing</h6>\r\n\t\t\t<div class=\"p-grid p-formgrid p-fluid\">\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<input pInputText />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<input pInputText />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"p-col-12 p-mb-2 p-lg-4 p-mb-lg-0\">\r\n\t\t\t\t\t<input pInputText />\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "qBte":
    /*!************************************************!*\
      !*** ./src/app/utilities/widgets.component.ts ***!
      \************************************************/

    /*! exports provided: WidgetsComponent */

    /***/
    function qBte(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function () {
        return WidgetsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./widgets.component.html */
      "t7uD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var WidgetsComponent = /*#__PURE__*/function () {
        function WidgetsComponent(breadcrumbService) {
          _classCallCheck(this, WidgetsComponent);

          this.breadcrumbService = breadcrumbService;
          this.activeOrders = 0;
          this.val1 = 1;
          this.val2 = 2;
          this.breadcrumbService.setItems([{
            label: 'Utilities'
          }, {
            label: 'Widgets',
            routerLink: ['/utilities/widgets']
          }]);
        }

        _createClass(WidgetsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ordersChart = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
              datasets: [{
                label: 'Revenue',
                data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
                borderColor: ['#00acac'],
                borderWidth: 2,
                fill: false,
                borderDash: [3, 6]
              }, {
                label: 'Cost',
                data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
                borderColor: ['#f1b263'],
                backgroundColor: ['rgba(241, 178, 99, .07)'],
                borderWidth: 2,
                fill: true,
                pointRadius: 3
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
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }],
                xAxes: [{
                  ticks: {
                    fontColor: '#A0A7B5'
                  },
                  gridLines: {
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }]
              }
            };
            this.likeChart = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'Like',
                data: [20, 40, 20, 70, 20, 49, 30],
                backgroundColor: '#f16383',
                borderWidth: 0,
                fill: false
              }, {
                label: 'Dislike',
                data: [5, 19, 10, 10, 22, 14, 10],
                backgroundColor: '#f1b263',
                borderWidth: 0,
                fill: false
              }, {
                label: 'View',
                data: [45, 80, 70, 90, 30, 90, 50],
                backgroundColor: '#02acac',
                borderWidth: 0,
                fill: false
              }]
            };
            this.likeOptions = {
              legend: {
                display: true,
                labels: {
                  fontColor: '#c3ccdd'
                }
              },
              responsive: true,
              hover: {
                mode: 'index'
              },
              scales: {
                xAxes: [{
                  display: false,
                  stacked: true
                }],
                yAxes: [{
                  display: false,
                  stacked: true
                }]
              }
            };
            this.items = [{
              label: 'View Profile',
              icon: 'pi pi-user'
            }, {
              label: 'Update Profile',
              icon: 'pi pi-refresh'
            }, {
              label: 'Delete Profile',
              icon: 'pi pi-trash'
            }];
          }
        }, {
          key: "changeDataset",
          value: function changeDataset(event) {
            var dataSet = [[31, 83, 69, 29, 62, 25, 59, 26, 46], [40, 29, 7, 73, 81, 69, 46, 21, 96]];
            var dataSet2 = [[67, 98, 27, 88, 38, 3, 22, 60, 56], [74, 67, 11, 36, 100, 49, 34, 56, 45]];
            this.activeOrders = parseInt(event.currentTarget.getAttribute('data-index'));
            this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[1].data = dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
            this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
          }
        }]);

        return WidgetsComponent;
      }();

      WidgetsComponent.ctorParameters = function () {
        return [{
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_3__["AppBreadcrumbService"]
        }];
      };

      WidgetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], WidgetsComponent);
      /***/
    },

    /***/
    "qVin":
    /*!*******************************************!*\
      !*** ./src/app/app.breadcrumb.service.ts ***!
      \*******************************************/

    /*! exports provided: AppBreadcrumbService */

    /***/
    function qVin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppBreadcrumbService", function () {
        return AppBreadcrumbService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppBreadcrumbService = /*#__PURE__*/function () {
        function AppBreadcrumbService() {
          _classCallCheck(this, AppBreadcrumbService);

          this.itemsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.itemsHandler = this.itemsSource.asObservable();
        }

        _createClass(AppBreadcrumbService, [{
          key: "setItems",
          value: function setItems(items) {
            this.itemsSource.next(items);
          }
        }]);

        return AppBreadcrumbService;
      }();

      AppBreadcrumbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppBreadcrumbService);
      /***/
    },

    /***/
    "rI0q":
    /*!*****************************************!*\
      !*** ./src/app/app.code.component.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function rI0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".p-d-flex > div,\n.box {\n  background-color: var(--surface-e);\n  text-align: center;\n  padding: 1rem;\n  border-radius: 4px;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n}\n\n.p-d-flex > div {\n  width: 8rem;\n}\n\ni:not([class~=pi]) {\n  background-color: var(--surface-b);\n  color: var(--primary-color);\n  font-family: Monaco, courier, monospace;\n  font-style: normal;\n  font-size: 12px;\n  padding: 2px 4px;\n  letter-spacing: 0.5px;\n  border-radius: 3px;\n  font-weight: 600;\n  margin: 0 2px;\n}\n\n:host ::ng-deep pre[class*=language-] {\n  box-shadow: none;\n  border: 0 none;\n}\n\n:host ::ng-deep pre[class*=language-]:before, :host ::ng-deep pre[class*=language-]:after {\n  display: none !important;\n}\n\n:host ::ng-deep pre[class*=language-] code {\n  border-left: 10px solid var(--surface-d) !important;\n  box-shadow: none !important;\n  background: var(--surface-b) !important;\n  margin: 1em 0;\n  color: var(--text-color);\n  font-size: 14px;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.tag, :host ::ng-deep pre[class*=language-] code .token.keyword {\n  color: #2196F3 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.attr-name, :host ::ng-deep pre[class*=language-] code .token.attr-string {\n  color: #2196F3 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.attr-value {\n  color: #4CAF50 !important;\n}\n\n:host ::ng-deep pre[class*=language-] code .token.punctuation {\n  color: var(--text-color);\n}\n\n:host ::ng-deep pre[class*=language-] code .token.operator, :host ::ng-deep pre[class*=language-] code .token.string {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUMsa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0FBQ0Q7O0FBRUE7RUFDQyxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRDs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUNDO0VBQ0Msd0JBQUE7QUFDRjs7QUFFQztFQUNDLG1EQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHRztFQUVDLHlCQUFBO0FBRko7O0FBS0c7RUFFQyx5QkFBQTtBQUpKOztBQU9HO0VBQ0MseUJBQUE7QUFMSjs7QUFRRztFQUNDLHdCQUFBO0FBTko7O0FBU0c7RUFFQyx1QkFBQTtBQVJKIiwiZmlsZSI6ImFwcC5jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnAtZC1mbGV4ID4gZGl2LFxyXG4uYm94IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWUpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbn1cclxuXHJcbi5wLWQtZmxleCA+IGRpdiB7XHJcblx0d2lkdGg6IDhyZW07XHJcbn1cclxuXHJcbmk6bm90KFtjbGFzc349XCJwaVwiXSkge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtYik7XHJcblx0Y29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG5cdGZvbnQtZmFtaWx5OiBNb25hY28sIGNvdXJpZXIsIG1vbm9zcGFjZTtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdHBhZGRpbmc6IDJweCA0cHg7XHJcblx0bGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0bWFyZ2luOiAwIDJweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0Ym9yZGVyOiAwIG5vbmU7XHJcblxyXG5cdCY6YmVmb3JlLCAmOmFmdGVyIHtcclxuXHRcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGNvZGUge1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDEwcHggc29saWQgdmFyKC0tc3VyZmFjZS1kKSAhaW1wb3J0YW50O1xyXG5cdFx0Ym94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1iKSAhaW1wb3J0YW50O1xyXG5cdFx0bWFyZ2luOiAxZW0gMDtcclxuXHRcdGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHJcblx0XHQudG9rZW4ge1xyXG5cdFx0XHQmLnRhZyxcclxuXHRcdFx0Ji5rZXl3b3JkIHtcclxuXHRcdFx0XHRjb2xvcjogIzIxOTZGMyAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLmF0dHItbmFtZSxcclxuXHRcdFx0Ji5hdHRyLXN0cmluZyB7XHJcblx0XHRcdFx0Y29sb3I6ICMyMTk2RjMgIWltcG9ydGFudDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ji5hdHRyLXZhbHVlIHtcclxuXHRcdFx0XHRjb2xvcjogIzRDQUY1MCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQmLnB1bmN0dWF0aW9uIHtcclxuXHRcdFx0XHRjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCYub3BlcmF0b3IsXHJcblx0XHRcdCYuc3RyaW5nIHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "s5Nh":
    /*!**********************************************!*\
      !*** ./src/app/utilities/icons.component.ts ***!
      \**********************************************/

    /*! exports provided: IconsComponent */

    /***/
    function s5Nh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconsComponent", function () {
        return IconsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./icons.component.html */
      "Joch");
      /* harmony import */


      var _icons_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./icons.scss */
      "H1jX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../demo/service/iconservice */
      "4Sr2");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app.breadcrumb.service */
      "qVin");

      var IconsComponent = /*#__PURE__*/function () {
        function IconsComponent(iconService, breadcrumbService) {
          _classCallCheck(this, IconsComponent);

          this.iconService = iconService;
          this.breadcrumbService = breadcrumbService;
          this.breadcrumbService.setItems([{
            label: 'Utilities'
          }, {
            label: 'Icons',
            routerLink: ['/utilities/icons']
          }]);
        }

        _createClass(IconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.iconService.getIcons().subscribe(function (data) {
              var icons = data;
              icons.sort(function (icon1, icon2) {
                if (icon1.properties.name < icon2.properties.name) {
                  return -1;
                } else if (icon1.properties.name < icon2.properties.name) {
                  return 1;
                } else {
                  return 0;
                }
              });
              _this22.icons = icons;
              _this22.filteredIcons = data;
            });
          }
        }, {
          key: "onFilter",
          value: function onFilter(event) {
            var searchText = event.target.value;

            if (!searchText) {
              this.filteredIcons = this.icons;
            } else {
              this.filteredIcons = this.icons.filter(function (it) {
                return it.icon.tags[0].includes(searchText);
              });
            }
          }
        }]);

        return IconsComponent;
      }();

      IconsComponent.ctorParameters = function () {
        return [{
          type: _demo_service_iconservice__WEBPACK_IMPORTED_MODULE_4__["IconService"]
        }, {
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["AppBreadcrumbService"]
        }];
      };

      IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_icons_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IconsComponent);
      /***/
    },

    /***/
    "t7uD":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/widgets.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function t7uD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<h4>Reusable CSS widgets for your applications.</h4>\r\n\r\n\r\n<div class=\"layout-widgets\">\r\n    <div class=\"p-grid\">\r\n        <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n            <div class=\"card overview-box-2 teal\">\r\n                <div class=\"overview-info\">\r\n                    <h6>Revenue Status</h6>\r\n                    <h3>87363</h3>\r\n                </div>\r\n                <i class=\"pi pi-dollar\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n            <div class=\"card overview-box-2 orange\">\r\n                <div class=\"overview-info\">\r\n                    <h6>Page View</h6>\r\n                    <h3>87363</h3>\r\n                </div>\r\n                <i class=\"pi pi-eye\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n            <div class=\"card overview-box-2 blue\">\r\n                <div class=\"overview-info\">\r\n                    <h6>Bounce Rate</h6>\r\n                    <h3>87363</h3>\r\n                </div>\r\n                <i class=\"pi pi-compass\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n            <div class=\"card overview-box-2 pink\">\r\n                <div class=\"overview-info\">\r\n                    <h6>Comments</h6>\r\n                    <h3>87363</h3>\r\n                </div>\r\n                <i class=\"pi pi-heart\"></i>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n            <div class=\"card  overview-box-1 blue\">\r\n                <div class=\"card-header\">\r\n                    <h6>Revenue Status</h6>\r\n                    <div class=\"header-buttons\">\r\n                        <a href=\"#\"><i class=\"pi pi-arrow-up\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"overview-content\">\r\n                    <h3>87363</h3>\r\n                    <div class=\"overview-graph\">\r\n                        <span style=\"height: 12px;\"><span class=\"graph-tooltip\">12</span></span>\r\n                        <span style=\"height: 40px;\"><span class=\"graph-tooltip\">40</span></span>\r\n                        <span style=\"height: 26px;\"><span class=\"graph-tooltip\">26</span></span>\r\n                        <span style=\"height: 17px;\"><span class=\"graph-tooltip\">17</span></span>\r\n                        <span style=\"height: 36px;\"><span class=\"graph-tooltip\">36</span></span>\r\n                        <span style=\"height: 51px;\"><span class=\"graph-tooltip\">51</span></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"overview-footer \">\r\n                    <span><i class=\"pi pi-arrow-up\"></i> <span>55%</span> increase in today sales</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n            <div class=\"card  overview-box-1 teal\">\r\n                <div class=\"card-header\">\r\n                    <h6>Page View</h6>\r\n                    <div class=\"header-buttons\">\r\n                        <a href=\"#\"><i class=\"pi pi-arrow-up\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"overview-content\">\r\n                    <h3>5592</h3>\r\n                    <div class=\"overview-graph\">\r\n                        <span style=\"height: 30px;\"><span class=\"graph-tooltip\">30</span></span>\r\n                        <span style=\"height: 43px;\"><span class=\"graph-tooltip\">43</span></span>\r\n                        <span style=\"height: 48px;\"><span class=\"graph-tooltip\">48</span></span>\r\n                        <span style=\"height: 40px;\"><span class=\"graph-tooltip\">40</span></span>\r\n                        <span style=\"height: 352x;\"><span class=\"graph-tooltip\">52</span></span>\r\n                        <span style=\"height: 18px;\"><span class=\"graph-tooltip\">18</span></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"overview-footer down\">\r\n                    <span><i class=\"pi pi-arrow-down\"></i> <span>12%</span> decrease in today sales</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n            <div class=\"card  overview-box-1 orange\">\r\n                <div class=\"card-header\">\r\n                    <h6>Bounce Rate</h6>\r\n                    <div class=\"header-buttons\">\r\n                        <a href=\"#\"><i class=\"pi pi-arrow-up\"></i></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"overview-content\">\r\n                    <h3>55.95%</h3>\r\n                    <div class=\"overview-graph\">\r\n                        <span style=\"height: 20px;\"><span class=\"graph-tooltip\">20</span></span>\r\n                        <span style=\"height: 23px;\"><span class=\"graph-tooltip\">23</span></span>\r\n                        <span style=\"height: 52px;\"><span class=\"graph-tooltip\">52</span></span>\r\n                        <span style=\"height: 18px;\"><span class=\"graph-tooltip\">18</span></span>\r\n                        <span style=\"height: 28px;\"><span class=\"graph-tooltip\">28</span></span>\r\n                        <span style=\"height: 42px;\"><span class=\"graph-tooltip\">42</span></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"overview-footer\">\r\n                    <span><i class=\"pi pi-arrow-up\"></i> <span>6%</span> increase in today sales</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-8\">\r\n            <div class=\"card news\">\r\n                <div class=\"news-content\">\r\n                    <h5>Air Quality Impacts Early Brain Development: Rats exposed to air pollution from\r\n                        traffic at risk of neurodevelopmental disorders</h5>\r\n                    <span>Researchers at the University of California, Davis, have found a link between\r\n                                    traffic-related air pollution and an increased risk for changes in brain development\r\n                                    relevant to neurodevelopmental disorders. Their study, based on rodent models,\r\n                                    corroborates previous epidemiological evidence showing this association.</span>\r\n                    <div class=\"news-content-footer\">\r\n                        <span><span>June 17, 2020 </span>in <span class=\"category\">Human and Animal Health</span></span>\r\n                        <span>By <span>Trina Wood</span></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"news-image\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n            <div class=\"card likes\">\r\n                <div class=\"card-header\">\r\n                    <h6>Likes</h6>\r\n                </div>\r\n                <div class=\"likes-chart\">\r\n                    <p-chart #like type=\"bar\" [data]=\"likeChart\" [options]=\"likeOptions\"></p-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-12\">\r\n            <div class=\"card news-feed\">\r\n                <div class=\"p-grid p-nogutter\">\r\n                    <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n                        <div class=\"news-feed-card\">\r\n                            <i class=\"pi pi-palette\"></i>\r\n                            <span class=\"title\">Sotheby’s Reports $2.5 Billion in Sales</span>\r\n                            <span class=\"news-feed-desc\">\r\n                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet vulputate laoreet. Maecenas sed sagittis lorem, sit amet egestas odio.\r\n                                        </span>\r\n                            <a href=\"#\">Learn More <i class=\"pi pi-chevron-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n                        <div class=\"news-feed-card\">\r\n                            <i class=\"pi pi-list\"></i>\r\n                            <span class=\"title\">7 Things to Do This Weekend</span>\r\n                            <span class=\"news-feed-desc\">\r\n                                            Phasellus lacinia tortor massa, quis elementum est posuere sit amet. Donec gravida efficitur urna quis congue.\r\n                                        </span>\r\n                            <a href=\"#\">Learn More <i class=\"pi pi-chevron-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n                        <div class=\"news-feed-card\">\r\n                            <i class=\"pi pi-heart\"></i>\r\n                            <span class=\"title\">New York Love Story: The Submarine Officer and the Beatles Cover Band</span>\r\n                            <span class=\"news-feed-desc\">\r\n                                            Proin blandit, neque sagittis pellentesque sodales, metus nunc mattis enim, a consequat ipsum odio sed massa.\r\n                                        </span>\r\n                            <a href=\"#\">Learn More <i class=\"pi pi-chevron-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"p-col-12 p-md-6 p-xl-3\">\r\n                        <div class=\"news-feed-card\">\r\n                            <i class=\"pi pi-video\"></i>\r\n                            <span class=\"title\">The World’s Greatest Directors Have Their Own Streaming Lists</span>\r\n                            <span class=\"news-feed-desc\">\r\n                                            Fusce feugiat augue ac nunc imperdiet consectetur. Sed lobortis justo orci, sollicitudin faucibus lorem volutpat quis.\r\n                                        </span>\r\n                            <a href=\"#\">Learn More <i class=\"pi pi-chevron-right\"></i></a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-6\">\r\n            <div class=\"card timeline\">\r\n                <div class=\"card-header\">\r\n                    <h6>Recent Activities</h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <span class=\"time\">3 mins ago</span>\r\n                        <div class=\"event-icon\">\r\n                            <i class=\"pi pi-dollar\"></i>\r\n                        </div>\r\n                        <div class=\"event-content\">\r\n                            <span class=\"event-title\">New Sale</span>\r\n                            <span>Richard Jones has purchased a blue t-shirt for $79.</span>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <span class=\"time\">3 mins ago</span>\r\n                        <div class=\"event-icon\">\r\n                            <i class=\"pi pi-download\"></i>\r\n                        </div>\r\n                        <div class=\"event-content\">\r\n                            <span class=\"event-title\">Withdrawal Initiated</span>\r\n                            <span>Your request for withdrawal of $2500 has been initiated.</span>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <span class=\"time\">5 mins ago</span>\r\n                        <div class=\"event-icon\">\r\n                            <i class=\"pi pi-question\"></i>\r\n                        </div>\r\n                        <div class=\"event-content\">\r\n                            <span class=\"event-title\">Question Received</span>\r\n                            <span>Jane Davis has posted a new question about your product.</span>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <span class=\"time\">1 day ago</span>\r\n                        <div class=\"event-icon\">\r\n                            <i class=\"pi pi-comments\"></i>\r\n                        </div>\r\n                        <div class=\"event-content\">\r\n                            <span class=\"event-title\">Comment Received</span>\r\n                            <span>Claire Smith has upvoted your store along with a comment.</span>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-6\">\r\n            <div class=\"card chat\">\r\n                <div class=\"card-header\">\r\n                    <h6>Chat</h6>\r\n                </div>\r\n                <div class=\"chat-messages\">\r\n                    <div class=\"chat-message-row\">\r\n                        <div class=\"chat-message\">\r\n                            <img src=\"assets/layout/images/pages/avatar-chat-1.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"chat-message-content\">\r\n                                <span>Chat message placeholder text comes here…</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"chat-message-footer\">\r\n                            <h6>Shirai Subaru</h6>\r\n                            <span>4 mins ago</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"chat-message-row send\">\r\n                        <div class=\"chat-message\">\r\n                            <img src=\"assets/layout/images/pages/avatar-chat-2.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"chat-message-content\">\r\n                                <span>Chat message placeholder text comes here…</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"chat-message-footer\">\r\n                            <h6>Wim Willems</h6>\r\n                            <span>4 mins ago</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"chat-message-row\">\r\n                        <div class=\"chat-message\">\r\n                            <img src=\"assets/layout/images/pages/avatar-chat-1.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"chat-message-content\">\r\n                                <span>Chat message placeholder text comes here…</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"chat-message-footer\">\r\n                            <h6>Shirai Subaru</h6>\r\n                            <span>4 mins ago</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"chat-input\">\r\n                    <input type=\"text\" pInputText placeholder=\"Write your message here...\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-8\">\r\n            <div class=\"card map\">\r\n                <div class=\"map-image\"></div>\r\n                <div class=\"map-content\">\r\n                    <div class=\"map-adjust\">\r\n                        <i class=\"pi pi-ellipsis-v\"></i>\r\n                    </div>\r\n                    <ul>\r\n                        <li>\r\n                            <i class=\"pi pi-map-marker\"></i>\r\n                            <div class=\"map-info\">\r\n                                <span><span>Order</span> #333 is delivered </span>\r\n                                <span class=\"time\">2 mins ago</span>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"pi pi-map-marker\"></i>\r\n                            <div class=\"map-info\">\r\n                                <span><span>Order</span> #334 is delivered </span>\r\n                                <span class=\"time\">2 mins ago</span>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"pi pi-map-marker\"></i>\r\n                            <div class=\"map-info\">\r\n                                <span><span>Order</span> #335 is delivered </span>\r\n                                <span class=\"time\">2 mins ago</span>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"pi pi-map-marker\"></i>\r\n                            <div class=\"map-info\">\r\n                                <span><span>Order</span> #336 is delivered </span>\r\n                                <span class=\"time\">2 mins ago</span>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"pi pi-map-marker\"></i>\r\n                            <div class=\"map-info\">\r\n                                <span><span>Order</span> #337 is delivered </span>\r\n                                <span class=\"time\">2 mins ago</span>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"pi pi-map-marker\"></i>\r\n                            <div class=\"map-info\">\r\n                                <span><span>Order</span> #338 is delivered </span>\r\n                                <span class=\"time\">2 mins ago</span>\r\n                            </div>\r\n                        </li>\r\n                        <li>\r\n                            <i class=\"pi pi-map-marker\"></i>\r\n                            <div class=\"map-info\">\r\n                                <span><span>Order</span> #339 is delivered </span>\r\n                                <span class=\"time\">2 mins ago</span>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-12 p-xl-4\">\r\n            <div class=\"card profile\">\r\n                <div class=\"profile-header\">\r\n                    <img src=\"assets/layout/images/pages/avatar-profil.png\" alt=\"poseidon-layout\" />\r\n                </div>\r\n                <div class=\"profile-content\">\r\n                    <h6>Adam Subaru</h6>\r\n                    <span>Delivery Master 👑</span>\r\n                    <p-button type=\"button\" label=\"Follow Adam\"></p-button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-8\">\r\n            <div class=\"card sale-graph\">\r\n                <div class=\"card-header\">\r\n                    <h6>Top Products</h6>\r\n                </div>\r\n                <div id=\"order-tabs-container\" class=\"order-tabs\">\r\n                    <div class=\"order-tab\" [ngClass]=\"{'order-tab-active':activeOrders===0}\"\r\n                         (click)=\"changeDataset($event); orders.refresh()\"\r\n                         data-label=\"New Sales\" data-index=\"0\" data-stroke=\"#00acac\" >\r\n                        <h6>Current Week</h6>\r\n                        <h3>$455.55</h3>\r\n                    </div>\r\n                    <div class=\"order-tab\" [ngClass]=\"{'order-tab-active':activeOrders===1}\"\r\n                         (click)=\"changeDataset($event); orders.refresh()\"\r\n                         data-label=\"Previous Sales\" data-index=\"1\" data-stroke=\"#2f8ee5\">\r\n                        <h6>Previous Week</h6>\r\n                        <h3>$244.40</h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"overview-chart\">\r\n                    <p-chart #orders type=\"line\" [data]=\"ordersChart\" [options]=\"ordersOptions\" [responsive]=\"true\"></p-chart>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-4\" >\r\n            <div class=\"pricing-card classic\">\r\n                <div class=\"pricing-header\">\r\n                    <span class=\"price\">$0.00</span>\r\n                    <h5>BEGINNER</h5>\r\n                    <span>Good starting point for startups</span>\r\n                </div>\r\n                <div class=\"pricing-content\">\r\n                    <ul>\r\n                        <li>Responsive</li>\r\n                        <li>10 Support Tickets</li>\r\n                        <li>Free Shipping</li>\r\n                        <li class=\"not-included\">Unlimited Space</li>\r\n                        <li class=\"not-included\">Push Messages</li>\r\n                    </ul>\r\n                    <p-button type=\"button\" label=\"TRY FREE\" class=\"p-button-info\"></p-button>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-6 p-xl-4\">\r\n            <div class=\"card product-list\">\r\n                <div class=\"card-header\">\r\n                    <h6>Product List</h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-1.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Nike Air X12</p>\r\n                                <span>Sold <span>250</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-2.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Nike Sports Watch</p>\r\n                                <span>Sold <span>189</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-3.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Heinz Yellow Mustard</p>\r\n                                <span>Sold <span>24</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-4.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Beats Headphone</p>\r\n                                <span>Sold <span>24</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-down down\"></i>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"product\">\r\n                            <img src=\"assets/layout/images/dashboard/image-product-5.png\" alt=\"poseidon-layout\" />\r\n                            <div class=\"product-info\">\r\n                                <p>Black Racing Bike</p>\r\n                                <span>Sold <span>24</span> times</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <i class=\"pi pi-arrow-up\"></i>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-6 p-xl-4\">\r\n            <div class=\"card sellers\">\r\n                <div class=\"card-header\">\r\n                    <h6>Seller List</h6>\r\n                </div>\r\n                <ul>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-1.png\" alt=\"poseidon-layout\" />\r\n                            <p>Hector Mariano</p>\r\n                        </div>\r\n                        <span>Tier 1</span>\r\n                        <p-rating [(ngModel)]=\"val2\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu1 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu1.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-2.png\" alt=\"poseidon-layout\" />\r\n                            <p>Maria Illescas</p>\r\n                        </div>\r\n                        <span>Tier 2</span>\r\n                        <p-rating [(ngModel)]=\"val2\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu2 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu2.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-3.png\" alt=\"poseidon-layout\" />\r\n                            <p>Ngô Hải Giang</p>\r\n                        </div>\r\n                        <span>Tier 3</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu3 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu3.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/seller-4.png\" alt=\"poseidon-layout\" />\r\n                            <p>Tamas Bunce</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu4 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu4.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/avatar-conan.png\" alt=\"poseidon-layout\" />\r\n                            <p>Conan Matusov</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu5 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu5.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-4.png\" alt=\"poseidon-layout\" />\r\n                            <p>Maria Illescas</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu6 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu6.toggle($event)\"></button>\r\n                    </li>\r\n                    <li>\r\n                        <div class=\"seller\">\r\n                            <img src=\"assets/layout/images/dashboard/leader-3.png\" alt=\"poseidon-layout\" />\r\n                            <p>Su Hua</p>\r\n                        </div>\r\n                        <span>Tier 4</span>\r\n                        <p-rating [(ngModel)]=\"val1\" readonly=\"true\" stars=\"3\"></p-rating>\r\n                        <p-menu #menu7 [popup]=\"true\" [model]=\"items\"></p-menu>\r\n                        <button type=\"button\" pButton icon=\"pi pi-ellipsis-v\" class=\"p-button-secondary p-button-outlined\" (click)=\"menu7.toggle($event)\"></button>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-col-12 p-md-6 p-xl-4\">\r\n            <div class=\"card tasks\">\r\n                <div class=\"card-header\">\r\n                    <h6>Tasks</h6>\r\n                </div>\r\n                <div>\r\n                    <div class=\"task task-1\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>12</span> Orders to fulfill</div>\r\n                            <i class=\"pi pi-tag\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-2\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>40+</span> Payments to withdraw</div>\r\n                            <i class=\"pi pi-money-bill\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-3\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>4</span> Reports to revise</div>\r\n                            <i class=\"pi pi-file\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-4\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>6</span> Questions to respond</div>\r\n                            <i class=\"pi pi-comment\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-5\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>2</span> Chargebacks to review</div>\r\n                            <i class=\"pi pi-check-square\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-1\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>12</span> Orders to fulfill</div>\r\n                            <i class=\"pi pi-tag\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"task task-2\">\r\n                        <div class=\"task-info\">\r\n                            <div class=\"task-name\"><span>40+</span> Payments to withdraw</div>\r\n                            <i class=\"pi pi-money-bill\"></i>\r\n                        </div>\r\n                        <div class=\"task-progress\">\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "uQp2":
    /*!*****************************************************!*\
      !*** ./src/app/demo/view/messagesdemo.component.ts ***!
      \*****************************************************/

    /*! exports provided: MessagesDemoComponent */

    /***/
    function uQp2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesDemoComponent", function () {
        return MessagesDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_messagesdemo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./messagesdemo.component.html */
      "w0qD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");

      var MessagesDemoComponent = /*#__PURE__*/function () {
        function MessagesDemoComponent(service, breadcrumbService) {
          _classCallCheck(this, MessagesDemoComponent);

          this.service = service;
          this.breadcrumbService = breadcrumbService;
          this.msgs = [];
          this.breadcrumbService.setItems([{
            label: 'Ui Kit'
          }, {
            label: 'Message',
            routerLink: ['/uikit/message']
          }]);
        }

        _createClass(MessagesDemoComponent, [{
          key: "showInfoViaToast",
          value: function showInfoViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'info',
              summary: 'Info Message',
              detail: 'PrimeNG rocks'
            });
          }
        }, {
          key: "showWarnViaToast",
          value: function showWarnViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'warn',
              summary: 'Warn Message',
              detail: 'There are unsaved changes'
            });
          }
        }, {
          key: "showErrorViaToast",
          value: function showErrorViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'error',
              summary: 'Error Message',
              detail: 'Validation failed'
            });
          }
        }, {
          key: "showSuccessViaToast",
          value: function showSuccessViaToast() {
            this.service.add({
              key: 'tst',
              severity: 'success',
              summary: 'Success Message',
              detail: 'Message sent'
            });
          }
        }, {
          key: "showInfoViaMessages",
          value: function showInfoViaMessages() {
            this.msgs = [];
            this.msgs.push({
              severity: 'info',
              summary: 'Info Message',
              detail: 'PrimeNG rocks'
            });
          }
        }, {
          key: "showWarnViaMessages",
          value: function showWarnViaMessages() {
            this.msgs = [];
            this.msgs.push({
              severity: 'warn',
              summary: 'Warn Message',
              detail: 'There are unsaved changes'
            });
          }
        }, {
          key: "showErrorViaMessages",
          value: function showErrorViaMessages() {
            this.msgs = [];
            this.msgs.push({
              severity: 'error',
              summary: 'Error Message',
              detail: 'Validation failed'
            });
          }
        }, {
          key: "showSuccessViaMessages",
          value: function showSuccessViaMessages() {
            this.msgs = [];
            this.msgs.push({
              severity: 'success',
              summary: 'Success Message',
              detail: 'Message sent'
            });
          }
        }]);

        return MessagesDemoComponent;
      }();

      MessagesDemoComponent.ctorParameters = function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
        }, {
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbService"]
        }];
      };

      MessagesDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_messagesdemo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
        styles: ["\n        :host ::ng-deep .p-button {\n            min-width: 8em;\n        }\n\n\t\t:host ::ng-deep .p-message {\n\t\t\tmargin-left: .25em;\n\t\t}\n    "]
      })], MessagesDemoComponent);
      /***/
    },

    /***/
    "vGzH":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app.invoice.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function vGzH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button pButton label=\"Print\" type=\"button\" icon=\"pi pi-print\" (click)=\"print()\"\r\n\t\tstyle=\"display:block;margin-bottom: 20px; margin-left: 6px;\"></button>\r\n\r\n<div class=\"p-grid\">\r\n\t<div class=\"p-col\">\r\n\t\t<div class=\"card\" >\r\n\t\t\t<div id=\"invoice-content\">\r\n\t\t\t\t<div class=\"invoice\">\r\n\t\t\t\t\t<div class=\"invoice-header\">\r\n\t\t\t\t\t\t<div class=\"invoice-company\">\r\n\t\t\t\t\t\t\t<img id=\"invoice-logo\"\r\n                                 [src]=\"'assets/layout/images/logo-' + (app.layoutMode === 'light' ? 'poseidon' : 'poseidon-dark') + '.png'\" alt=\"poseidon-layout\" />\r\n\t\t\t\t\t\t\t<div class=\"company-name\">YOUR COMPANY</div>\r\n\t\t\t\t\t\t\t<div>9137 3rd Lane California City</div>\r\n\t\t\t\t\t\t\t<div>CA 93504, U.S.A.</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"invoice-title\">INVOICE</div>\r\n\t\t\t\t\t\t\t<div class=\"invoice-details\">\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-label\">DATE</div>\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-value\">30/08/2019</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-label\">INVOICE #</div>\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-value\">8523</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-label\">CUSTOMER ID</div>\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-value\">C1613</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"invoice-to\">\r\n\t\t\t\t\t\t<div class=\"bill-to\">BILL TO</div>\r\n\t\t\t\t\t\t<div class=\"invoice-to-info\">\r\n\t\t\t\t\t\t\t<div>Claire Williams, 148 Hope Lane</div>\r\n\t\t\t\t\t\t\t<div>Palo Alto, CA 94304. </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"invoice-items\">\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<th>Description</th>\r\n\t\t\t\t\t\t\t\t<th>Quantity</th>\r\n\t\t\t\t\t\t\t\t<th>Unit Price</th>\r\n\t\t\t\t\t\t\t\t<th>Line Total</th>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>Green T-Shirt</td>\r\n\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t<td>$49.00</td>\r\n\t\t\t\t\t\t\t\t<td>$49.00</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>Game Controller</td>\r\n\t\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t\t<td>$99.00</td>\r\n\t\t\t\t\t\t\t\t<td>$198.00</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>Mini Speakers</td>\r\n\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t<td>$85.00</td>\r\n\t\t\t\t\t\t\t\t<td>$85.00</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"invoice-summary\">\r\n\t\t\t\t\t\t<div class=\"invoice-notes\">\r\n\t\t\t\t\t\t\t<b>NOTES</b>\r\n\t\t\t\t\t\t\t<div>\r\n\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"invoice-details\">\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-label\">SUBTOTAL</div>\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-value\">$332.00</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-label\">VAT</div>\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-value\">0</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-label\">TOTAL</div>\r\n\t\t\t\t\t\t\t\t<div class=\"invoice-value\">$332.00</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/profile/profile.component */
      "Y5Lh");
      /* harmony import */


      var _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./demo/view/invalidstatedemo.component */
      "P2fs");
      /* harmony import */


      var _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./demo/view/formlayoutdemo.component */
      "CfVz");
      /* harmony import */


      var _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./demo/view/messagesdemo.component */
      "uQp2");
      /* harmony import */


      var _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./demo/view/overlaysdemo.component */
      "4Pek");
      /* harmony import */


      var _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./demo/view/panelsdemo.component */
      "8jOm");
      /* harmony import */


      var _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./demo/view/menusdemo.component */
      "gitr");
      /* harmony import */


      var _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./demo/view/mediademo.component */
      "WOi/");
      /* harmony import */


      var _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./demo/view/miscdemo.component */
      "j1Et");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./demo/view/emptydemo.component */
      "a9iL");
      /* harmony import */


      var _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./demo/view/chartsdemo.component */
      "aOMY");
      /* harmony import */


      var _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./demo/view/filedemo.component */
      "7s2l");
      /* harmony import */


      var _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./demo/view/documentation.component */
      "Pv7A");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./app.main.component */
      "mqcR");
      /* harmony import */


      var _pages_app_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/app.error.component */
      "anCR");
      /* harmony import */


      var _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/app.accessdenied.component */
      "pRB7");
      /* harmony import */


      var _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./demo/view/inputdemo.component */
      "DlPI");
      /* harmony import */


      var _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./demo/view/floatlabeldemo.component */
      "M6OY");
      /* harmony import */


      var _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./demo/view/buttondemo.component */
      "M8Z4");
      /* harmony import */


      var _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./demo/view/tabledemo.component */
      "Hf0O");
      /* harmony import */


      var _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./demo/view/treedemo.component */
      "JvKG");
      /* harmony import */


      var _utilities_display_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./utilities/display.component */
      "Znji");
      /* harmony import */


      var _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./utilities/elevation.component */
      "8iZH");
      /* harmony import */


      var _utilities_grid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./utilities/grid.component */
      "MgdU");
      /* harmony import */


      var _utilities_icons_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./utilities/icons.component */
      "s5Nh");
      /* harmony import */


      var _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./utilities/widgets.component */
      "qBte");
      /* harmony import */


      var _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./utilities/spacing.component */
      "p563");
      /* harmony import */


      var _utilities_typography_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./utilities/typography.component */
      "3Li2");
      /* harmony import */


      var _utilities_text_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./utilities/text.component */
      "SsAV");
      /* harmony import */


      var _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pages/app.timelinedemo.component */
      "NG6J");
      /* harmony import */


      var _pages_app_invoice_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./pages/app.invoice.component */
      "GKnm");
      /* harmony import */


      var _pages_app_help_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./pages/app.help.component */
      "Bxr+");
      /* harmony import */


      var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./auth/auth.guard */
      "P+IX");
      /* harmony import */


      var _demo_view_pablo_by_people_pablo_by_people_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./demo/view/pablo-by-people/pablo-by-people.component */
      "Uri6");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _pages_quizz_app_crud_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./pages/quizz/app.crud.component */
      "2NkY");

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([{
          path: '',
          component: _app_main_component__WEBPACK_IMPORTED_MODULE_16__["AppMainComponent"],
          children: [{
            path: '',
            component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_38__["HomeComponent"],
            canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
          }, {
            path: 'home',
            component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_38__["HomeComponent"],
            canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
          }, {
            path: 'pabloByPeople/:id',
            component: _demo_view_pablo_by_people_pablo_by_people_component__WEBPACK_IMPORTED_MODULE_36__["PabloByPeopleComponent"],
            canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
          }, {
            path: 'profile/:id',
            component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"],
            canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
          }, {
            path: 'uikit/formlayout',
            component: _demo_view_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_3__["FormLayoutDemoComponent"]
          }, {
            path: 'uikit/floatlabel',
            component: _demo_view_floatlabeldemo_component__WEBPACK_IMPORTED_MODULE_20__["FloatLabelDemoComponent"]
          }, {
            path: 'uikit/invalidstate',
            component: _demo_view_invalidstatedemo_component__WEBPACK_IMPORTED_MODULE_2__["InvalidStateDemoComponent"]
          }, {
            path: 'uikit/input',
            component: _demo_view_inputdemo_component__WEBPACK_IMPORTED_MODULE_19__["InputDemoComponent"]
          }, {
            path: 'uikit/button',
            component: _demo_view_buttondemo_component__WEBPACK_IMPORTED_MODULE_21__["ButtonDemoComponent"]
          }, {
            path: 'uikit/table',
            component: _demo_view_tabledemo_component__WEBPACK_IMPORTED_MODULE_22__["TableDemoComponent"]
          }, {
            path: 'uikit/tree',
            component: _demo_view_treedemo_component__WEBPACK_IMPORTED_MODULE_23__["TreeDemoComponent"]
          }, {
            path: 'uikit/panel',
            component: _demo_view_panelsdemo_component__WEBPACK_IMPORTED_MODULE_6__["PanelsDemoComponent"]
          }, {
            path: 'uikit/overlay',
            component: _demo_view_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_5__["OverlaysDemoComponent"]
          }, {
            path: 'uikit/menu',
            component: _demo_view_menusdemo_component__WEBPACK_IMPORTED_MODULE_7__["MenusDemoComponent"]
          }, {
            path: 'uikit/media',
            component: _demo_view_mediademo_component__WEBPACK_IMPORTED_MODULE_8__["MediaDemoComponent"]
          }, {
            path: 'uikit/message',
            component: _demo_view_messagesdemo_component__WEBPACK_IMPORTED_MODULE_4__["MessagesDemoComponent"]
          }, {
            path: 'uikit/misc',
            component: _demo_view_miscdemo_component__WEBPACK_IMPORTED_MODULE_9__["MiscDemoComponent"]
          }, {
            path: 'uikit/charts',
            component: _demo_view_chartsdemo_component__WEBPACK_IMPORTED_MODULE_13__["ChartsDemoComponent"]
          }, {
            path: 'uikit/file',
            component: _demo_view_filedemo_component__WEBPACK_IMPORTED_MODULE_14__["FileDemoComponent"]
          }, {
            path: 'utilities/display',
            component: _utilities_display_component__WEBPACK_IMPORTED_MODULE_24__["DisplayComponent"]
          }, {
            path: 'utilities/elevation',
            component: _utilities_elevation_component__WEBPACK_IMPORTED_MODULE_25__["ElevationComponent"]
          }, {
            path: 'utilities/grid',
            component: _utilities_grid_component__WEBPACK_IMPORTED_MODULE_26__["GridComponent"]
          }, {
            path: 'utilities/icons',
            component: _utilities_icons_component__WEBPACK_IMPORTED_MODULE_27__["IconsComponent"]
          }, {
            path: 'utilities/widgets',
            component: _utilities_widgets_component__WEBPACK_IMPORTED_MODULE_28__["WidgetsComponent"]
          }, {
            path: 'utilities/spacing',
            component: _utilities_spacing_component__WEBPACK_IMPORTED_MODULE_29__["SpacingComponent"]
          }, {
            path: 'utilities/typography',
            component: _utilities_typography_component__WEBPACK_IMPORTED_MODULE_30__["TypographyComponent"]
          }, {
            path: 'utilities/text',
            component: _utilities_text_component__WEBPACK_IMPORTED_MODULE_31__["TextComponent"]
          }, {
            path: 'pages/crud',
            component: _pages_quizz_app_crud_component__WEBPACK_IMPORTED_MODULE_39__["AppCrudComponent"]
          }, {
            path: 'pages/timeline',
            component: _pages_app_timelinedemo_component__WEBPACK_IMPORTED_MODULE_32__["AppTimelineDemoComponent"]
          }, {
            path: 'pages/invoice',
            component: _pages_app_invoice_component__WEBPACK_IMPORTED_MODULE_33__["AppInvoiceComponent"]
          }, {
            path: 'pages/help',
            component: _pages_app_help_component__WEBPACK_IMPORTED_MODULE_34__["AppHelpComponent"]
          }, {
            path: 'pages/empty',
            component: _demo_view_emptydemo_component__WEBPACK_IMPORTED_MODULE_12__["EmptyDemoComponent"]
          }, {
            path: 'documentation',
            component: _demo_view_documentation_component__WEBPACK_IMPORTED_MODULE_15__["DocumentationComponent"]
          }]
        }, {
          path: 'error',
          component: _pages_app_error_component__WEBPACK_IMPORTED_MODULE_17__["AppErrorComponent"]
        }, {
          path: 'access',
          component: _pages_app_accessdenied_component__WEBPACK_IMPORTED_MODULE_18__["AppAccessdeniedComponent"]
        }, {
          path: 'login',
          component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_37__["AppLoginComponent"]
        }, {
          path: '**',
          redirectTo: '/notfound'
        }], {
          scrollPositionRestoration: 'enabled'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vdpq":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/chartsdemo.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function vdpq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid p-fluid\">\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h5 class=\"centerText\">Linear Chart</h5>\r\n            <p-chart type=\"line\" [data]=\"lineData\" [options]=\"chartsOptions\"></p-chart>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5 class=\"centerText\">Pie Chart</h5>\r\n            <p-chart type=\"pie\" [data]=\"pieData\" [options]=\"chartsOptions2\"></p-chart>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5 class=\"centerText\">Polar Area Chart</h5>\r\n            <p-chart type=\"polarArea\" [data]=\"polarData\" [options]=\"chartsOptions2\"></p-chart>\r\n        </div>\r\n    </div>\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h5 class=\"centerText\">Bar Chart</h5>\r\n            <p-chart type=\"bar\" [data]=\"barData\" [options]=\"chartsOptions\"></p-chart>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5 class=\"centerText\">Doughnut Chart</h5>\r\n            <p-chart type=\"doughnut\" [data]=\"pieData\" [options]=\"chartsOptions2\"></p-chart>\r\n        </div>\r\n\r\n        <div class=\"card\">\r\n            <h5 class=\"centerText\">Radar Chart</h5>\r\n            <p-chart type=\"radar\" [data]=\"radarData\" [options]=\"chartsOptions2\"></p-chart>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "w0qD":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/view/messagesdemo.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function w0qD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h5>Toast</h5>\r\n            <p-toast key=\"tst\"></p-toast>\r\n\r\n            <button type=\"button\" pButton (click)=\"showSuccessViaToast()\" label=\"Success\" class=\"p-button-success p-mr-2 p-mb-2\"></button>\r\n            <button type=\"button\" pButton (click)=\"showInfoViaToast()\" label=\"Info\" class=\"p-button-info p-mr-2 p-mb-2\"></button>\r\n            <button type=\"button\" pButton (click)=\"showWarnViaToast()\" label=\"Warn\" class=\"p-button-warning p-mr-2 p-mb-2\"></button>\r\n            <button type=\"button\" pButton (click)=\"showErrorViaToast()\" label=\"Error\" class=\"p-button-danger p-mb-2\"></button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-lg-6\">\r\n        <div class=\"card\">\r\n            <h5>Messages</h5>\r\n            <button type=\"button\" pButton (click)=\"showSuccessViaMessages()\" label=\"Success\" class=\"p-button-success p-mr-2 p-mb-2\"></button>\r\n            <button type=\"button\" pButton (click)=\"showInfoViaMessages()\" label=\"Info\" class=\"p-button-info p-mr-2 p-mb-2\"></button>\r\n            <button type=\"button\" pButton (click)=\"showWarnViaMessages()\" label=\"Warn\" class=\"p-button-warning p-mr-2 p-mb-2\"></button>\r\n            <button type=\"button\" pButton (click)=\"showErrorViaMessages()\" label=\"Error\" class=\"p-button-danger p-mb-2\"></button>\r\n\r\n            <p-messages [value]=\"msgs\"></p-messages>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-lg-8\">\r\n        <div class=\"card\">\r\n            <h5>Inline Message</h5>\r\n            <div class=\"p-mt-4\">\r\n                <input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid p-invalid p-mr-2\">\r\n                <p-message severity=\"error\" text=\"Field is required\"></p-message>\r\n            </div>\r\n\r\n            <div class=\"p-mt-4\">\r\n                <input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid p-invalid p-mr-2\">\r\n                <p-message severity=\"error\"></p-message>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"p-col-12 p-lg-4\">\r\n        <div class=\"card\">\r\n            <h5>Help Text</h5>\r\n            <div class=\"p-field p-fluid\">\r\n                <label for=\"username\">Username</label>\r\n                <input id=\"username\" type=\"username\" aria-describedby=\"username-help\" class=\"p-invalid\" pInputText />\r\n                <small id=\"username-help\" class=\"p-invalid\">Username is not available.</small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n";
      /***/
    },

    /***/
    "xE+y":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/display.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function xEY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Photos</h4>\r\n\t\t\t<div class=\"p-col-12\">\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t<p-galleria [value]=\"images\" [responsiveOptions]=\"galleriaResponsiveOptions\"\r\n\t\t\t\t\t\t[containerStyle]=\"{'max-width': '800px', 'margin':'auto'}\" [numVisible]=\"7\" [circular]=\"true\">\r\n\t\t\t\t\t\t<ng-template pTemplate=\"item\" let-item>\r\n\t\t\t\t\t\t\t<div style=\"background-image: url('{{item.itemImageSrc}}'); width: 100vh; height: 65vh; background-size: cover;\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- <img [src]=\"item.itemImageSrc\" style=\"width: 100%; display: block;\" /> -->\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t<ng-template pTemplate=\"thumbnail\" let-item>\r\n\t\t\t\t\t\t\t<div class=\"p-grid p-nogutter p-justify-center\">\r\n\t\t\t\t\t\t\t\t<img [src]=\"item.thumbnailImageSrc\"\r\n\t\t\t\t\t\t\t\t\tstyle=\"display: block; width: 40px; height: 40px;\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</p-galleria>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
      /***/
    },

    /***/
    "xLnY":
    /*!**********************************************!*\
      !*** ./src/app/demo/service/photoservice.ts ***!
      \**********************************************/

    /*! exports provided: PhotoService */

    /***/
    function xLnY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(http) {
          _classCallCheck(this, PhotoService);

          this.http = http;
        }

        _createClass(PhotoService, [{
          key: "getImages",
          value: function getImages() {
            return this.http.get('assets/demo/data/photos.json').toPromise().then(function (res) {
              return res.data;
            }).then(function (data) {
              return data;
            });
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], PhotoService);
      /***/
    },

    /***/
    "xrpP":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.rightpanel.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function xrpP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-rightpanel\" (click)=\"app.onRightPanelClick()\">\r\n    <div class=\"rightpanel-wrapper\">\r\n        <div class=\"section-tasks today\">\r\n            <h5>Your Tasks Today</h5>\r\n            <ul>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked1\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked1}\">\r\n                        <h6>Sales reports</h6>\r\n                        <span>Today</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked2\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked2}\">\r\n                        <h6>Pay invoices</h6>\r\n                        <span>Today</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked3\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked3}\">\r\n                        <h6>Dinner with Tony</h6>\r\n                        <span>Today, 22:36</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked4\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked4}\">\r\n                        <h6>Client meeting</h6>\r\n                        <span>Today</span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <hr/>\r\n\r\n        <div class=\"section-tasks upcoming\">\r\n            <h5>Upcoming</h5>\r\n            <ul>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked5\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked5}\">\r\n                        <h6>New representative meeting</h6>\r\n                        <span>27 May</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked6\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked6}\">\r\n                        <h6>Flight tickets</h6>\r\n                        <span>28 May</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked7\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked7}\">\r\n                        <h6>Generate charts</h6>\r\n                        <span>29 May</span>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\" [(ngModel)]=\"checked8\"></p-checkbox>\r\n                    <div class=\"task\" [ngClass]=\"{'done':checked8}\">\r\n                        <h6>Delete old files</h6>\r\n                        <span>30 May</span>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "yd5u":
    /*!******************************************************!*\
      !*** ./src/app/demo/view/dashboarddemo.component.ts ***!
      \******************************************************/

    /*! exports provided: DashboardDemoComponent */

    /***/
    function yd5u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardDemoComponent", function () {
        return DashboardDemoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "66gQ");
      /* harmony import */


      var _tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tabledemo.scss */
      "MBEb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _service_productservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/productservice */
      "ibcK");
      /* harmony import */


      var _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../app.breadcrumb.service */
      "qVin");
      /* harmony import */


      var _app_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../app.main.component */
      "mqcR");

      var DashboardDemoComponent = /*#__PURE__*/function () {
        function DashboardDemoComponent(productService, breadcrumbService, appMain) {
          _classCallCheck(this, DashboardDemoComponent);

          this.productService = productService;
          this.breadcrumbService = breadcrumbService;
          this.appMain = appMain;
          this.activeOrders = 0;
          this.activeTraffic = 0;
          this.val1 = 1;
          this.val2 = 2;
          this.breadcrumbService.setItems([{
            label: 'Favorites'
          }, {
            label: 'Dashboard',
            routerLink: ['/']
          }]);
        }

        _createClass(DashboardDemoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.productService.getProducts().then(function (data) {
              return _this23.products = data;
            });
            this.productService.getProducts().then(function (data) {
              return _this23.productsThisWeek = data;
            });
            this.productService.getProductsMixed().then(function (data) {
              return _this23.productsLastWeek = data;
            });
            this.ordersChart = {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
              datasets: [{
                label: 'Revenue',
                data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
                borderColor: ['#00acac'],
                borderWidth: 2,
                fill: false,
                borderDash: [3, 6]
              }, {
                label: 'Cost',
                data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
                borderColor: ['#f1b263'],
                backgroundColor: ['rgba(241, 178, 99, .07)'],
                borderWidth: 2,
                fill: true,
                pointRadius: 3
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
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }],
                xAxes: [{
                  ticks: {
                    fontColor: '#A0A7B5'
                  },
                  gridLines: {
                    color: 'rgba(160, 167, 181, .3)'
                  }
                }]
              }
            };
            this.trafficChart = this.getTrafficChartData();
            this.trafficOptions = {
              legend: {
                display: false
              },
              responsive: true,
              cutoutPercentage: 70
            };

            this.appMain['refreshTrafficChart'] = function () {
              _this23.trafficChart = _this23.getTrafficChartData();
            };

            this.goalChart = {
              labels: ['Complete', 'Not Complete', 'Extra Tasks'],
              datasets: [{
                data: [183, 62, 10],
                backgroundColor: ['#ffffff', 'rgba(255,255,255,.2)', 'rgba(255,255,255,.5)'],
                borderWidth: 0
              }]
            };
            this.goalOptions = {
              legend: {
                display: false
              },
              responsive: true
            };
            this.items = [{
              label: 'View Profile',
              icon: 'pi pi-user'
            }, {
              label: 'Update Profile',
              icon: 'pi pi-refresh'
            }, {
              label: 'Delete Profile',
              icon: 'pi pi-trash'
            }];
            this.orderWeek = [{
              name: 'This Week',
              code: '0'
            }, {
              name: 'Last Week',
              code: '1'
            }];
          }
        }, {
          key: "getTrafficChartData",
          value: function getTrafficChartData() {
            return {
              labels: ['Add View', 'Total View'],
              datasets: [{
                data: [48, 52],
                backgroundColor: [getComputedStyle(document.body).getPropertyValue('--primary-dark-color') || '#2c84d8', getComputedStyle(document.body).getPropertyValue('--content-alt-bg-color') || '#B1B9C9'],
                borderWidth: 0
              }]
            };
          }
        }, {
          key: "changeDataset",
          value: function changeDataset(event) {
            var dataSet = [[31, 83, 69, 29, 62, 25, 59, 26, 46], [40, 29, 7, 73, 81, 69, 46, 21, 96]];
            var dataSet2 = [[67, 98, 27, 88, 38, 3, 22, 60, 56], [74, 67, 11, 36, 100, 49, 34, 56, 45]];
            this.activeOrders = parseInt(event.currentTarget.getAttribute('data-index'));
            this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[1].data = dataSet2[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
            this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
          }
        }, {
          key: "changeTrafficset",
          value: function changeTrafficset(event) {
            var traffidDataSet = [[48, 52], [26, 74], [12, 88]];
            this.activeTraffic = parseInt(event.currentTarget.getAttribute('data-index'));
            this.trafficChart.datasets[0].data = traffidDataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
          }
        }, {
          key: "recentSales",
          value: function recentSales(event) {
            if (event.value.code === '0') {
              this.products = this.productsThisWeek;
            } else {
              this.products = this.productsLastWeek;
            }
          }
        }]);

        return DashboardDemoComponent;
      }();

      DashboardDemoComponent.ctorParameters = function () {
        return [{
          type: _service_productservice__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
        }, {
          type: _app_breadcrumb_service__WEBPACK_IMPORTED_MODULE_5__["AppBreadcrumbService"]
        }, {
          type: _app_main_component__WEBPACK_IMPORTED_MODULE_6__["AppMainComponent"]
        }];
      };

      DashboardDemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabledemo_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DashboardDemoComponent);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "ywSW":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ywSW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"login-body\">\r\n    <div class=\"login-wrapper\">\r\n        <div class=\"login-panel\">\r\n            <form [formGroup]=\"loginForm\">\r\n                <div class=\"login-form form-group\">\r\n                    <h2>Login To Pablo App</h2>\r\n                    <h6>Try a new experience as a close person of Pablo</h6>\r\n                    <input type=\"text\" autocomplete=\"off\" formControlName=\"login\" pInputText placeholder=\"User\">\r\n                    <input type=\"password\" autocomplete=\"off\" formControlName=\"password\" pInputText\r\n                        placeholder=\"Password\">\r\n                    <div style=\"color: #de5757; margin-top: -1rem; margin-bottom: 1rem;font-size: 0.8rem;\">\r\n                        {{errorMessage}}\r\n                    </div>\r\n                    <button type=\"submit\" pButton pRipple label=\"LOGIN\" (click)=\"onSave()\" type=\"button\"></button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "z7Cp":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.breadcrumb.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function z7Cp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"layout-breadcrumb\">\r\n    <div class=\"breadcrumb\">\r\n        <div class=\"route-bar-breadcrumb\">\r\n            <ng-template ngFor let-item let-last=\"last\" [ngForOf]=\"items\">\r\n                <li>\r\n                    <a [routerLink]=\"item.routerLink\" class=\"p-link\" *ngIf=\"item.routerLink\">{{item.label}}</a>\r\n                    <ng-container *ngIf=\"!item.routerLink\">{{item.label}}</ng-container>\r\n                </li>\r\n                <li *ngIf=\"!last\"><i class=\"pi pi-angle-right\"></i></li>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zYCZ":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/utilities/text.component.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function zYCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"p-grid\">\r\n\t<div class=\"p-col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<h4>Text</h4>\r\n\t\t\t<p>Manage the alignment and the styling of a text with <a href=\"https://github.com/primefaces/primeflex\">PrimeFlex</a> text utilities.</p>\r\n\r\n\t\t\t<h5>Alignment</h5>\r\n\t\t\t<div class=\"p-mb-3 p-text-left\">Left</div>\r\n\t\t\t<div class=\"p-mb-3 p-text-center\">Center</div>\r\n\t\t\t<div class=\"p-text-right\">Right</div>\r\n\r\n\t\t\t<h5>Wrap</h5>\r\n\t\t\t<div class=\"p-mb-3 demo-container\" style=\"width: 10rem\">Long text wraps and does not overlow.</div>\r\n\t\t\t<div class=\"p-mb-3 demo-container p-text-nowrap\" style=\"width: 10rem\">Long text does not wrap and overflows the parent.</div>\r\n\t\t\t<div class=\"p-mb-3 demo-container p-text-nowrap p-text-truncate\" style=\"width: 10rem\">Long text does not wrap and overflows the parent.</div>\r\n\r\n\t\t\t<h5>Transform</h5>\r\n\t\t\t<div class=\"p-mb-3 p-text-lowercase\">LOWERCASE</div>\r\n\t\t\t<div class=\"p-mb-3 p-text-uppercase\">uppercase</div>\r\n\t\t\t<div class=\"p-text-capitalize\">capitalize</div>\r\n\r\n\t\t\t<h5>Style</h5>\r\n\t\t\t<div class=\"p-mb-3 p-text-bold\">Bold</div>\r\n\t\t\t<div class=\"p-mb-3 p-text-normal\">Normal</div>\r\n\t\t\t<div class=\"p-mb-3 p-text-light\">Light</div>\r\n\t\t\t<div class=\"p-mb-3 p-text-italic\">Italic</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map