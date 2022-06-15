import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    templateUrl: './app.crud.component.html',
    styleUrls: ['./tabledemo.scss'],
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }

        @media screen and (max-width: 960px) {
            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:last-child {
                text-align: center;
            }

            :host ::ng-deep .p-datatable.p-datatable-customers .p-datatable-tbody > tr > td:nth-child(6) {
                display: flex;
            }
        }

    `],
    providers: [MessageService, ConfirmationService]
})
export class AppCrudComponent {
    questions: any;
    currentIndex: number;
    notAttempted: any;
    correct: any;
    currentQuestionSet: any;
    start = false;
    gameover = false;
    buttonname = "Play";
    constructor() {
        this.questions = [
            {
                id: 1,
                question: 'Aniversário do Pablo',
                option: [
                    { optionid: 1, name: '19/06' },
                    { optionid: 2, name: '18/06' },
                    { optionid: 3, name: '19/07' },
                    { optionid: 4, name: '29/06' }
                ],
                answer: 2,
                selected: 0
            },
            {
                id: 2,
                question: 'Esporte favorito do Pablo',
                option: [
                    { optionid: 1, name: 'Volei' },
                    { optionid: 2, name: 'Futebol' },
                    { optionid: 3, name: 'Handbol' },
                    { optionid: 4, name: 'Natação' }
                ],
                answer: 1,
                selected: 0
            },
            {
                id: 3,
                question: 'Qual é o nome completo do Pablo?',
                option: [
                    { optionid: 1, name: 'Pablo Elisandro Fiori' },
                    { optionid: 2, name: 'Pablo Elizandro Fiori' },
                    { optionid: 3, name: 'Pablo Elizandro Fiori de Paula' },
                    { optionid: 4, name: 'Pablo Elisandro Fiori do Rocio' }
                ],
                answer: 3,
                selected: 0
            },
            {
                id: 4,
                question: 'Select the smallest memory size',
                option: [
                    { optionid: 1, name: 'kilobyte' },
                    { optionid: 2, name: 'megabyte' },
                    { optionid: 3, name: 'gigabyte' },
                    { optionid: 4, name: 'terabyte' }
                ],
                answer: 1,
                selected: 0
            },
            {
                id: 5,
                question: 'What is the full form of IP?',
                option: [
                    { optionid: 1, name: 'Internet program' },
                    { optionid: 2, name: 'Internet protocol' },
                    { optionid: 3, name: 'Interface program' },
                    { optionid: 4, name: 'Interface protocol' }
                ],
                answer: 2,
                selected: 0
            },
            {
                id: 6,
                question: 'What is the full form of IP?',
                option: [
                    { optionid: 1, name: 'Internet program' },
                    { optionid: 2, name: 'Internet protocol' },
                    { optionid: 3, name: 'Interface program' },
                    { optionid: 4, name: 'Interface protocol' }
                ],
                answer: 2,
                selected: 0
            },
        ];

        this.currentIndex = 0;
        this.currentQuestionSet = this.questions[this.currentIndex];
    }

    next() {
        this.currentIndex = this.currentIndex + 1;
        this.currentQuestionSet = this.questions[this.currentIndex];
        
    }
    submit() {
        this.buttonname = "Replay";
        if (this.currentIndex + 1 == this.questions.length) {
            this.gameover = true;
            this.start = false;
            this.correct = 0;
            this.notAttempted = 0;
            this.questions.map(x => {
                if (x.selected != 0) {
                    if (x.selected == x.answer)
                        this.correct = this.correct + 1;
                }
                else {
                    this.notAttempted = this.notAttempted + 1;
                }
                x.selected = 0;
            });
        }


    }
    startQuiz() {
        this.gameover = false;
        this.currentIndex = 0;
        this.currentQuestionSet = this.questions[this.currentIndex];
        this.start = true;
    }
}
