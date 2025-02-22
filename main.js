/* Copyright (C) 2017 9_OPZ #Certified CoderZ
 * GNU GENERAL PUBLIC LICENSE
 * Full LICENSE file ( gpl-3.0-licence.txt )
 * BiZ9 Framework
 * Utility-Main
 */
const moment = require('moment');
const prettydate = require('pretty-date');

const get_guid_main = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const get_id_main = (max) => {
    if(!max){
        max = 99999;
    }
    let r=Math.floor(Math.random()*max)+1;
    return r;
}
const error_main = (title,str) => {
    if(!str){
        str=title;
        title='';
    }
    if(!str){
        str='error null';
    }
    console.log('ERROR___' +String(title).toUpperCase()+ '___START__________________');
    console.log(str);
    console.log('ERROR___' +String(title).toUpperCase()+ '___END_____________________');
}
const w_main = (title,str) => {
    if(!str){
        str='null';
    }
    console.log('PRINT__'+String(title).toUpperCase()+ '___START__________________');
    console.log(str);
    console.log('PRINT__'+String(title).toUpperCase()+ '___END_____________________');
}
const error_append_main = (org_error,new_error) => {
    if(new_error){
        if(!org_error){
            org_error='';
        }
        new_error = ' error message: ' + new_error + ",";
        org_error = org_error + new_error
    }
    return org_error;
}
const get_test_item_main = (data_type,id) => {
    if(!data_type){
        data_type='dt_blank';
    }
    if(!id){
        id=0;
    }
    let _id=get_id_main(9999);
    let item_test = {data_type:data_type,id:id};
    item_test.title='title_'+_id;
    item_test.first_name='first_name_'+_id;
    item_test.last_name='last_name_'+_id;
    item_test.user_name='user_name_'+_id;
    item_test.group_id=_id;
    return item_test;
}
const get_title_url_main = (title) => {
    if(!title){
        title='';
    }
    return title.replace(/[^a-z0-9]+/ig, "_").toLowerCase();
}
const get_date_time_str_main = (datetime) => {
    //Tuesday, February 14th 2023, at 2:39 am
    return String(moment(datetime).format("dddd MMMM Do, YYYY h:mm a"));
}
const get_date_str_main = (date) => {
    //Tuesday, February 14th 2023
    if(date){
        return String(moment(date).format("dddd MMMM Do, YYYY"));
    }
    else{
        return 'Invalid Date Format';
    }
}
const get_date_time_pretty_main = (date) => {
    if(date){
        return prettydate.format(new Date(date));
    }
    else{
        return null;
    }
}
const get_currency_main = (amount) => {
    return Math.round(100 * parseFloat(typeof amount === 'string' ? amount.replace(/[$,]/g, '') : amount));
}
const get_contains_main = (value,searchFor) => {
    return (value || '').indexOf(searchFor) > -1;
}
const remove_html_str_main = (str) => {
    let regex = /(<([^>]+)>)/ig;
    let _data = "";
    if(str){
        _data = str.replace(regex, "");
    }
    return _data;
}
const get_time_str_main = (date) => {
    if(date){
        let t = moment(date);
        return t.format("h:mm a");
    }
    else{
        let t = moment();
        return t.format("h:mm a");
    }
}
const get_date_time_obj_main = (date) => {
    if(date){
        return moment(date);
    }
    else{
        return moment(new Date());
    }
}
const get_iso_str_by_date_time_main = (date,time) => {
    if(date){
        return moment(date+ ' ' + time).toISOString();
    }
    else{
        return moment().toISOString();
    }
}
const remove_money_main = (n) => {
    if(!n){
        n='0';
    }
    return String(n).replace('$','');
}
const get_money_main = (_n) => {
    let n = parseFloat(_n);
    if(!n || isNaN(n)){
        n = 0;
    }
    return "$" + n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
const get_cents_main = (number) => {
    return  parseInt((Number(number) * 100)).toString();
}
const get_month_title_short_main = (d) =>{
    switch(d) {
        case 1:
            return 'Jan';
            break;
        case 2:
            return 'Feb';
            break;
        case 3:
            return 'Mar';
            break;
        case 4:
            return 'Apr';
            break;
        case 5:
            return 'May';
            break;
        case 6:
            return 'Jun';
            break;
        case 7:
            return 'Jul';
            break;
        case 8:
            return 'Aug';
            break;
        case 9:
            return 'Sep';
            break;
        case 10:
            return 'Oct';
            break;
        case 11:
            return 'Nov';
            break;
        case 12:
            return 'Dec';
            break;
        default:
            return 'Jan';
    }
}
const get_month_title_main = (d) =>{
    switch(d){
        case 1:
            return 'January';
            break;
        case 2:
            return 'February';
            break;
        case 3:
            return 'March';
            break;
        case 4:
            return 'April';
            break;
        case 5:
            return 'May';
            break;
        case 6:
            return 'June';
            break;
        case 7:
            return 'July';
            break;
        case 8:
            return 'August';
            break;
        case 9:
            return 'September';
            break;
        case 10:
            return 'October';
            break;
        case 11:
            return 'November';
            break;
        case 12:
            return 'December';
            break;
        default:
            return 'January';
    }
}
const text_truncate_main = (str,length,ending) => {
    if (length == null) { length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}
const validate_email_main = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const get_paging_list_main = (data_list,current_page,page_size) => {
    return new Promise((callback) => {
        let error = null;
        if(current_page>=1||!current_page){
            current_page=1;
        }
        let item_count = data_list.length;
        let skip = page_size * (current_page - 1);
        let page_count = Math.ceil(item_count / page_size);
        let new_data_list = data_list.slice(skip, skip + page_size);
        callback([new_data_list,item_count,page_count]);
    });
}

const get_older_date_main = (date_1, date_2) =>{
    if(date_1.getTime() < date_2.getTime()){
        return 'date1';
    }else{
        return 'date2';
    }
}
const set_form_item_list_main = (data_type,item_list_data) =>{
    if(!data_type){
        data_type='dt_none';
    }
    for(let a=0;a<item_list_data.length;a++){
        if(!item_list_data[a].id){
            item_list_data[a].id='0';
        }
        item_list_data[a].data_type = data_type;
    }
    return item_list_data;
}

module.exports = {
    w_main,
    error_main,
    get_guid_main,
    get_id_main,
    error_append_main,
    get_test_item_main,
    get_title_url_main,
    get_date_time_str_main,
    get_date_str_main,
    get_date_time_pretty_main,
    get_currency_main,
    get_contains_main,
    remove_html_str_main,
    get_time_str_main,
    get_date_time_obj_main,
    get_iso_str_by_date_time_main,
    remove_money_main,
    get_money_main,
    get_cents_main,
    get_month_title_short_main,
    get_month_title_main,
    text_truncate_main,
    validate_email_main,
    get_paging_list_main,
    get_older_date_main,
    set_form_item_list_main
};
