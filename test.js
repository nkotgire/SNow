var arrProblem = ["PRB0040658", "PRB0040663"];
var grPrb = new GlideRecord('problem');
var grPTask = new GlideRecord('problem_task');

for(i=0;i<arrProblem.length;i++){
    if(grPrb.get('number',arrProblem[i])){
        gs.print(grPrb.number + " state: " + grPrb.state.getDisplayValue());
        grPrb.state = "2";
        grPrb.active = 'true';

        grPTask = new GlideRecord('problem_task');
        grPTask.addQuery('problem', grPrb.sys_id);
        grPTask.query();
        while(grPTask.next()){
            gs.print(grPTask.number + " state: " + grPTask.state.getDisplayValue());
            grPTask.state = "2";
            grPTask.active = 'true';
        }
        
    }
}






