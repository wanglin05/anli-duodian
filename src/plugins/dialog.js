import dialogConfig from '@/components/dialog'
class Dialog{
    constructor(Vue,options){
        this.options = options;
        this.DialogClass = Vue.extend(dialogConfig);
        Dialog.DialogComponent = this.getDialogComponent();
        this.open();
        
    }
    getDialogComponent(){
        const DialogClass = this.DialogClass;
        if(Dialog.DialogComponent instanceof DialogClass){
            return Dialog.DialogComponent;
        }
        const DialogComponent = new DialogClass({
            propsData:{
                type:this.options.type,
                title:this.options.message
            }
        })
        DialogComponent.$mount();
        document.body.appendChild(DialogComponent.$el);
    }
    openDialog(){
        Dialog.DialogComponent.openDialog();
    }
    close(){

    }
}