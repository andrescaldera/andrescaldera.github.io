$(document).ready(function(){
  EMF_jQuery(window).load(function(){
  	post_message_for_frame_height("07ya8b1cmvfa42d1zaj6");
  });

  EMF_jQuery(function(){
  	generate_css_for_emf_ad();


  	EMF_jQuery("#emf-form").validationEngine({
  		validationEventTriggers:"blur",
  		scroll:true
  	});
  	prevent_duplicate_submission(EMF_jQuery("#emf-form"));

  	$("input[emf_mask_input=true]").dPassword();

  	if(EMF_jQuery('#captcha_image').length>0){
  		on_captcha_image_load();
  	}

  	EMF_jQuery('.emf-field-grid td').click(function(event){
  		// 		if(!event.target.tagName || event.target.tagName.toLowerCase()!='td') return;

  		EMF_jQuery(this).find('input[type=checkbox],input[type=radio]').click();
  	});

      EMF_jQuery('input[type=checkbox],input[type=radio]').click(function(event){
          event.stopPropagation();
      });


  	EMF_jQuery("#emf-form div div").mousedown(highlight_field_on_mousedown);
  	EMF_jQuery("#emf-form div div input, #emf-form div div textarea, #emf-form div div select").focus(highlight_field_on_focus);

  		var form_obj=EMF_jQuery("#emf-container form");
  	if(form_obj.length>0 && form_obj.attr('action').indexOf('#')==-1 && window.location.hash){
  		form_obj.attr('action', form_obj.attr('action')+window.location.hash);
  	}

  	init_rules();

  	enable_session_when_cookie_disabled();

  	detect_unsupported_browser();

  	randomize_field_content();



  	});

  var emf_widgets={text :
  			function(index){
  				return $("#element_"+index).val();
  			},number :
  			function(index){
  				return $("#element_"+index).val();
  			},textarea :
  			function(index){
  				return $("#element_"+index).val();
  			},new_checkbox :
  			function(index){
  				var arr=new Array();
  				$("input[name='element_"+index+"[]']:checked").each(function(){
  					arr[arr.length]=this.value;
  				});
  				var result=arr.join(", ");
  				return result;
  			},radio :
  			function(index){
  				var result="";
  				$("input[name=element_"+index+"]:checked").each(function(){
  					result=this.value;
  				});
  				return result;
  			},select :
  			function(index){
  				return $("#element_"+index).val();
  			},email :
  			function(index){
  				return $("#element_"+index).val();
  			},phone :
  			function(index){
  				var arr=new Array();
  				$("input[id^=element_"+index+"_]").each(function(){
  					arr[arr.length]=this.value;
  				});

  				var result="";
  				if(arr.length>0){
  					result=arr.join("-");
  				}else{
  					result=$("#element_"+index).val();
  				}
  				return result;
  			},datetime :
  			function(index){
  				var result="";

  				var date_part="";
  				if($("#element_"+index+"_year").length==1){
  					date_part=$("#element_"+index+"_year-mm").val()+"/"+$("#element_"+index+"_year-dd").val()+"/"+$("#element_"+index+"_year").val();
  				}

  				var time_part="";
  				if($("#element_"+index+"_hour").length==1){
  					time_part=$("#element_"+index+"_hour").val()+":"+$("#element_"+index+"_minute").val()+" "+$("#element_"+index+"_ampm").val();
  				}

  				if(date_part && time_part){
  					result=date_part+" "+time_part;
  				}else{
  					result=date_part ? date_part : time_part;
  				}

  				return result;
  			},url :
  			function(index){
  				return $("#element_"+index).val();
  			},file :
  			function(index){
  				return $("#element_"+index).val();
  			},Image :
  			function(index){
  				return $("#element_"+index).val();
  			},new_select_multiple :
  			function(index){
  				return $("#element_"+index).val();
  			},price :
  			function(index){
  				var result="";
  				var arr=new Array();
  				$("input[id^=element_"+index+"_]").each(function(){
  					arr[arr.length]=this.value;
  				});
  				result=arr.join(".");
  				return result;
  			},hidden :
  			function(index){
  				return $("#element_"+index).val();
  			},unique_id :
  			function(index){
  				return $("#element_"+index).val();
  			},section_break :
  			function(index){
  				return "";
  			},page_break :
  			function(index){
  				return "";
  			},signature :
  			function(index){
  				return $("#element_"+index).val();
  			},star_rating :
  			function(index){
  				var result="";
  				$("input[name=element_"+index+"]:checked").each(function(){
  					result=this.value;
  				});
  				return result;
  			},scale_rating :
  			function(index){
  				var result="";
  				$("input[name=element_"+index+"]:checked").each(function(){
  					result=this.value;
  				});
  				return result;
  			},deprecated :
  			function(index){
  				return $("#element_"+index).val();
  			},address :
  			function(index){
  				var result="";
  				var element_arr=$("input,select").filter("[name='element_"+index+"[]']").toArray();
  				result=element_arr[0].value+" "+element_arr[1].value+"\n"+element_arr[2].value+","+element_arr[3].value+""+element_arr[4].value+"\n"+element_arr[5].value;
  				return result;
  			},name :
  			function(index){
  				var arr = new Array();
  				$("input[id^=element_"+index+"_]").each(function(){
  					arr[arr.length]=this.value;
  				});
  				var result=arr.join(" ");
  				return result;
  			},checkbox :
  			function(index){
  				var arr = new Array();
  				$("input[name='element_"+index+"[]']:checked").each(function(){
  					arr[arr.length]=this.value;
  				});
  				var result=arr.join(", ");
  				return result;
  			},select_multiple :
  			function(index){
  				return $("#element_"+index).val();
  			}
  		};

  var emf_condition_id_to_js_map={5 :
  			function(field_value, value){
  				return field_value==value;
  			},6 :
  			function(field_value, value){
  				return field_value!=value;
  			},1 :
  			function(field_value, value){
  				return field_value.indexOf(value)>-1;
  			},2 :
  			function(field_value, value){
  				return field_value.indexOf(value)==-1;
  			},3 :
  			function(field_value, value){
  				return field_value.indexOf(value)===0;
  			},4 :
  			function(field_value, value){
  				return field_value.indexOf(value)==field_value.length-value.length;
  			},7 :
  		function(field_value, value){
  		return parseFloat(field_value)==parseFloat(value);
  	},8 :
  			function(field_value, value){
  				return parseFloat(field_value)>parseFloat(value);
  			},9 :
  			function(field_value, value){
  				return parseFloat(field_value) < parseFloat(value);
  			},10 :
  			function(field_value, value){
  				var date_for_field_value=Date.parse(field_value);
  				var date_for_value=Date.parse(value);
  				if(date_for_field_value && date_for_value){
  					return date_for_field_value == date_for_value;
  				}
  				return false;
  			},11 :
  			function(field_value, value){
  				var date_for_field_value=Date.parse(field_value);
  				var date_for_value=Date.parse(value);
  				if(date_for_field_value && date_for_value){
  					return date_for_field_value < date_for_value;
  				}
  				return false;
  			},12 :
  			function(field_value, value){
  				var date_for_field_value=Date.parse(field_value);
  				var date_for_value=Date.parse(value);
  				if(date_for_field_value && date_for_value){
  					return date_for_field_value > date_for_value;
  				}
  				return false;
  			}
  		};
  var emf_group_to_field_rules_map=[];
  var emf_group_to_page_rules_for_confirmation_map=[];

  var emf_cart=null;
  var emf_page_info={current_page_index: 0, page_element_index_min: 0, page_element_index_max: 9};
  var emf_index_to_value_map=null;
  var emf_form_visit_id="07ya8b1cmvfa42d1zaj6";

  var emf_index_to_option_map=[];
});
