import styles from '@/app/styles'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm'
import UserActionComponent from '@/components/UserActionComponent'

const ChangePasswordPage = ({ params }) => {

  return (
    <div className={`${styles.mainSection} items-center justify-center`}>
     <UserActionComponent title='Change User Password' form={<ChangePasswordForm/>}/>
    </div>
  )
}

export default ChangePasswordPage