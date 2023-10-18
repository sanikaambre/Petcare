import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import bgImg from '../assets/img1.jpg';

export default function Registration() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [registrationMessage, setRegistrationMessage] = useState(null);
    const onSubmit = data => {

    setRegistrationMessage('Registration successful!!!');

    // console.log(watch('username'));
    console.log(data);
    };
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Register</h2>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("PetOwnersFull Name")} placeholder='Pet Owner Full Name' />
                    <input type="text" {...register("EmailAddress")} placeholder='Email Address' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <input type="text" {...register("Address")} placeholder='Address' />
                    <input type="text" {...register("PetAge")} placeholder='Pet Age' />
                    <div className="question-container"> {/* Add a container for the question */}
              <label className="question-label">Which pet are you registering for?</label>
              <div className="question-options"> 
              <input type="radio" {...register('petType', { required: true })} value="dog" id="dog" />
              <label htmlFor="dog">Dog</label>

              <input type="radio" {...register('petType', { required: true })} value="cat" id="cat" />
              <label htmlFor="cat">Cat</label>

              <input type="radio" {...register('petType', { required: true })} value="other" id="other" />
              <label htmlFor="other">Other</label>
            </div>
            {errors.petType?.type === 'required' && 'Please select a pet type'}
  {errors.agreeToTerms?.type === 'required' && 'You must agree to the Terms and Conditions'}
            </div>
    
            <div className="terms-checkbox">
        <input type="checkbox" {...register('agreeToTerms', { required: true })} id="agreeToTerms" />
        <label htmlFor="agreeToTerms">I agree to the Terms and Conditions</label>
        {errors.agreeToTerms?.type === 'required' && 'You must agree to the Terms and Conditions'}
      </div>
        
                    <button className='btn'>Register</button>
                </form>
                {registrationMessage && (
            <div className="registration-message">{registrationMessage}</div>
          )}

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
      
    </section>
  )
}