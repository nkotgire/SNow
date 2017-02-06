var arrProblem = ["PRB0040658", "PRB0040663"];
var grPrb = new GlideRecord('problem');
var grPTask = new GlideRecord('problem_task');

for(i=0;i<arrProblem.length;i++){
    if(grPrb.get('number',arrProblem[i])){
        gs.print(grPrb.number + " state: " + grPrb.state.getDisplayValue());
        grPrb.state = "2";
        grPrb.assignment_group = "App Data";
        grPrb.active = 'true';
        /*
        grPrb.autoSysFields(false);
        grPrb.setWorkflow(false);
        grPrb.update();
        */
        grPTask = new GlideRecord('problem_task');
        grPTask.addQuery('problem', grPrb.sys_id);
        grPTask.query();
        while(grPTask.next()){
            gs.print(grPTask.number + " state: " + grPTask.state.getDisplayValue());
            grPTask.state = "2";
            grPTask.assignment_group = "App Data";
            grPTask.active = 'true';
            /*
            grPTask.autoSysFields(false);
            grPTask.setWorkflow(false);
            grPTask.update();
            */
        }
        
    }
}

var gr = new GlideRecord('u_adhoc_requests');
gr.get('00c2a53bdb103ec0627efd871d961905');
gr.parent = "793765946f6b22007ba5b1b3dd3ee445";
//gr.update();
gr.autoSysFields(false);
gr.setWorkflow(false);
gr.update();

function onLoad() {
   //Type appropriate comment here, and begin script below
   setPreference('glide.ui.show_annotations','true');
}



Comments added to RITM Approval record

function onBefore(current, previous) {
	//gs.addInfoMessage("In function");
	if(current.sys_updated_by == current.u_requested_for.email){
		current.state = 300;
		current.u_request_state = 300;
		current.u_show_state = "In Progress";
	}
	else{
		var gr = new GlideRecord('sys_user');
		var list = current.watch_list;
		var array = list.split(",");
		for (var i=0; i < array.length; i++) {
			//gs.addInfoMessage(array[i]);
			gr.get(array[i]);
			if(gr.email == current.sys_updated_by){
				current.state = 300;
				current.u_request_state = 300;
				current.u_show_state = "In Progress";
			}
			
		}
	}

}

var gr = new GlideRecord('sc_req_item');
gr.get('547f3fbedb6cb240627efd871d9619fe');
gs.print(gr.number);
gs.print(gr.state.getDisplayValue());
gr.state = '4';
/*
gr.autoSysFields(false);
gr.setWorkflow(false);
gr.update();
*/
gs.print(gr.number);
gs.print(gr.state.getDisplayValue());
