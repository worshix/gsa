import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

// A simple form for subscribing
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div className='flex flex-col gap-2 bg-white bg-opacity-10 m-2 rounded-md sm:w-[300px] lg:w-[350px] sm:flex-shrink-0'>
      <h1 className='text-center font-bold text-main2 p-2'>Subscribe to our Newsletter</h1>
      <input
        ref={(node) => (name = node)}
        type="text"
        placeholder="Name"
        className='m-2 bg-white bg-opacity-15 p-2 rounded-sm focus:outline-none'
      />
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Email"
        className='m-2 bg-white bg-opacity-15 p-2 rounded-sm focus:outline-none'
      />
      <button
        onClick={submit}
        className='w-fit p-2 bg-main3 rounded-md text-white font-bold m-2 ml-auto hover:scale-95 transition-all duration-300 shadow-md shadow-black active:scale-90 active:shadow-sm'
      >
        Subscribe
      </button>
      {status === "sending" && <div>Sending...</div>}
      {status === "error" && <div dangerouslySetInnerHTML={{ __html: message }} />}
      {status === "success" && <div>Subscribed!</div>}
    </div>
  );
};

const MailchimpFormContainer = () => {
  const postUrl = `https://us13.api.mailchimp.com/3.0/lists/480cdeffc2/members`; // Replace <dc> and <list_id> with your data

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};

export default MailchimpFormContainer;

