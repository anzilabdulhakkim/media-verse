export const API_KEY='AIzaSyAj-j2GFOs7btf8n8VZEfL2aoMyhJ7oxP0'

export const value_converter=(value)=>{
if(value>=1000000){
    return Math.floor(value/1000000)+"M";
}
else if(value>=1000){
    return Math.floor(value/1000)+"K";
}
else{
    return value
}
}