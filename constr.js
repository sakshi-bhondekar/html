class RailwayForm{
    constructor(givenname, trainno, address){
        console.log(`CONSTRUCTER CALLED...  ${givenname}, ${trainno}`)
        this.name = givenname;
        this.trainno = trainno;
        this.address = address;
    }
    preview() {
        alert(`${this.name} Your form is submitted for train number ${this.trainno}`);
    }
    submit() {
        alert(`${this.name} Your form is submitted for train number ${this.trainno}`);
    }
    cancle() {
        alert(`${this.name} Your form is cancelled for train number  ${this.trainno}`);
        this.trainno = 0;
    }       
}

let sakshiForm = new RailwayForm("Sakshi", 13488, "420, Pacific Ocean , Ocean Bihar - 000555")
sakshiForm.preview()
sakshiForm.submit()
sakshiForm.cancle()
sakshiForm.preview()


