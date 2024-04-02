import { validate } from "class-validator";

export class Usercontroller{
    constructor(public element:HTMLElement){
        const button = element.querySelector('#play');

        console.log('UserControler constructor');

        button?.addEventListener('click',this.processPlayButtonClick);
    }

    processPlayButtonClick(event:Event){
        event.preventDefault();
        console.log('event ...');

        const form = this.element.querySelector('form') as HTMLFormElement;
        const usernameElement = this.element.querySelector('#username') as HTMLInputElement;
        const helpId = this.element.querySelector('#UsenameHelpId');

        if(usernameElement){
            let user: User = new User(usernameElement.value);

            validate(user).then(error=>{
                if(errors.Length > 0){
                    if(helpId){
                        helpId.className = 'form-text text-muted visible'
                    }else{
                        form.submit();
                    }
                }
            })
        }
    }
}