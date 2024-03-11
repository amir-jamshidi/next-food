import * as Yup from 'yup'

export const addressSchema = Yup.object({
    reciver: Yup.string().min(3, 'نام گیرنده حداقل باید سه کاراکتر باشه').required('لطفا نام گیرنده رو وارد کن'),
    phone: Yup.string().min(11, 'شماره تماس باید یازده رقم باشه').max(11, 'شماره تماس باید یازده رقم باشه').required('لطفا شماره تلفن گیرنده رو وارد کن').matches(/^09[\d]{9}$/ , 'فرمت شماره همراه درست نیست'),
    name: Yup.string().min(3, 'نام آدرس حداقل باید سه کاراکتر باشه').required('لطفا یه نام برای آدرس انتخاب کن ، مثلا : آدرس محل کارم'),
    fullAddress: Yup.string().min(15, 'آدرس حداقل باید پانزده کاراکتر باشه').required('لطفا آدرس رو با همه جزئیات وارد کن')
})

export const ticketSchema = Yup.object({
    body: Yup.string().min(10, 'متن تیکت حداقل باید ده کاراکتر باشه').required('لطفا متن تیکت رو وارد کن'),
    sectionID: Yup.string().min(10, 'لطفا بخش مورد نظر رو انتخاب کن').required('لطفا بخش مورد نظر رو انتخاب کن'),
    orderID: Yup.string()
})

export const userSchema = Yup.object({
    fullname: Yup.string().min(3, 'نام شما باید حداقل سه کاراکتر باشه').required('لطفا نام خود را وارد کنید'),
    email: Yup.string().email('فرمت ایمیل درست نیست').min(8, 'فرمت ایمیل درست نیست').required('لطفا ایمیل خودتو وارد کن')
})