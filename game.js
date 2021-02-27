function startGame(){
    window.open('select_table.html', '_self', ''); 
}

class multiplication_table{
    constructor(row, col, startfrom){
        this.row = row;
        this.col = col;
        this.startfrom = startfrom;
    }

    getRandRow(){
        return this.startfrom + Math.floor(Math.random() * this.row); 
    }

    getRandCol(){
        return this.startfrom + Math.floor(Math.random() * this.col); 
    }

    getAnswer(n1,n2){
        return n1*n2;
    }

    isCorrect(input,answer){
        if(input == answer){
            return true;
        }
        return false;
    }

    getRandOption(){
        let n1 = this.startfrom + Math.floor(Math.random() * this.row);
        let n2 = this.startfrom + Math.floor(Math.random() * this.col);
        let answer = this.getAnswer(n1,n2);
        return [n1,n2,answer];
    }

    getRandPosition(){
        let randPosition = Math.floor(Math.random() * 4) ;
        return randPosition;
    }

    getRandQuestion(){
        let question = [];
        while(question.length < 4){
            let randOption =  this.getRandOption();
            if(question.indexOf(randOption) === -1) question.push(randOption);
        }
        let randPosition = this.getRandPosition();
        question.push(randPosition);
        return question;
    }

    getRandQuestions(n){
        let questions = [];
        while(questions.length < n){
            let question = this.getRandQuestion();
            if(questions.indexOf(question) === -1) questions.push(question);
        }
        return questions;
    }

}
