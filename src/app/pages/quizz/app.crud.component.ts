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
                question: 'Um dos costumes mais fortes do Pablo',
                option: [
                    { optionid: 1, name: 'Lavar a mão a todo momento' },
                    { optionid: 2, name: 'Tirar o tênis assim que chega na casa' },
                    { optionid: 3, name: 'Tomar 3 banhos por dia' },
                    { optionid: 4, name: 'Ler um livro por semana' }
                ],
                answer: 1,
                selected: 0
            },
            {
                id: 5,
                question: 'Qual dessas coisas o Pablo nunca fez?',
                option: [
                    { optionid: 1, name: 'Deu aula de Inglês' },
                    { optionid: 2, name: 'Apresentou em um grupo de dança' },
                    { optionid: 3, name: 'Já trabalhou como palhaço em festas infantis' },
                    { optionid: 4, name: 'Deu aula de dança' }
                ],
                answer: 3,
                selected: 0
            },
            {
                id: 6,
                question: 'O Pablo prefere:',
                option: [
                    { optionid: 1, name: 'Chá' },
                    { optionid: 2, name: 'Café' },
                ],
                answer: 2,
                selected: 0
            },
            {
                id: 7,
                question: 'Campeão do Pablo que ele mais acha lindo:',
                option: [
                    { optionid: 1, name: 'Kai`sa' },
                    { optionid: 2, name: 'Graves' },
                    { optionid: 3, name: 'Vayne' },
                    { optionid: 4, name: 'Ezreal' }
                ],
                answer: 1,
                selected: 0
            },
            {
                id: 8,
                question: 'Uma das músicas que mais lembra a juventude dele:',
                option: [
                    { optionid: 1, name: 'Justin Timberlake - My Love' },
                    { optionid: 2, name: 'Jessie J - Who`s Laughing Now' },
                    { optionid: 3, name: 'Iggy Azalea - Fancy' },
                    { optionid: 4, name: 'MAGIC! - Rude' }
                ],
                answer: 3,
                selected: 0
            },
            {
                id: 9,
                question: 'Qual é o membro favorito de little mix do Pablo?',
                option: [
                    { optionid: 1, name: 'Jesy Nelson' },
                    { optionid: 2, name: 'Jade Thirlwall' },
                    { optionid: 3, name: 'Perrie Edwards' },
                    { optionid: 4, name: 'Leigh-Anne Pinnock' }
                ],
                answer: 4,
                selected: 0
            },
            {
                id: 10,
                question: 'Qual é o suco de frutas favorito do Pablo?',
                option: [
                    { optionid: 1, name: 'Laranja' },
                    { optionid: 2, name: 'Morango' },
                    { optionid: 3, name: 'Maracujá' },
                    { optionid: 4, name: 'Melancia' }
                ],
                answer: 3,
                selected: 0
            }
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
