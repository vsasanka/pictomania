import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  // const { userId } = auth();
  const transformation = transformationTypes[type];

  // if(!userId) redirect('/sign-in')

  // const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={"65d6d0097b1b5a806df48091"} // user._id
          type={transformation.type as TransformationTypeKey}
          creditBalance={10} //user.creditBalance
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage