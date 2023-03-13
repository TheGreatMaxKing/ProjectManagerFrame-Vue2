import Cookie from "js-cookie";
export default function getlocalstoragetoken(){
    const token=Cookie.get('token')
    return token
}