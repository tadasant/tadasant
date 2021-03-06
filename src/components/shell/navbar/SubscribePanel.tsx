import * as React from 'react';
import { SFC } from 'react';
import { compose, withState } from 'recompose';
import { Body2, Header } from '../../../styling/Typography';
import { ContentDiv, StyledTextField, SubmitButton } from './SubscribePanel.style';

// TODO could turn this into a public mailchimp component
const postToMailchimp = (email: string, firstName: string, lastName?: string) => {
  const path = 'https://tadasant.us19.list-manage.com/subscribe/post?u=35763864ff52517433180ce28&amp;id=f97ea6014c';
  const method = 'post';

  const form = document.createElement('form');
  form.setAttribute('method', method);
  form.setAttribute('action', path);
  form.setAttribute('target', '_blank');

  const emailField = document.createElement('input');
  emailField.setAttribute('type', 'hidden');
  emailField.setAttribute('name', 'EMAIL');
  emailField.setAttribute('value', email);
  form.appendChild(emailField);

  const firstNameField = document.createElement('input');
  firstNameField.setAttribute('type', 'hidden');
  firstNameField.setAttribute('name', 'FNAME');
  firstNameField.setAttribute('value', firstName);
  form.appendChild(firstNameField);

  if (lastName !== '' && lastName) {
    const lastNameField = document.createElement('input');
    lastNameField.setAttribute('type', 'hidden');
    lastNameField.setAttribute('name', 'LNAME');
    lastNameField.setAttribute('value', lastName);
    form.appendChild(lastNameField);
  }

  document.body.appendChild(form);
  form.submit();
};

interface IStateProps {
  emailAddress: string
  setEmailAddress: (s: string) => string
  firstName: string
  setFirstName: (s: string) => string
  lastName: string
  setLastName: (s: string) => string
}

const SubscribePanel: SFC<IStateProps> = props => {
  const { emailAddress, setEmailAddress, firstName, setFirstName, lastName, setLastName } = props;

  const handleSubmit = () => postToMailchimp(emailAddress, firstName, lastName);

  // TODO something wrong with TypeScript
  const EmailField = (
    // @ts-ignore
    <StyledTextField
      value={emailAddress}
      placeholder='Email address'
      inputProps={{ type: 'email' }}
      onChange={event => setEmailAddress(event.target.value === undefined ? '' : event.target.value)}
    />
  );
  const FirstNameField = (
    // @ts-ignore
    <StyledTextField
      value={firstName}
      placeholder='First name'
      inputProps={{ type: 'text' }}
      onChange={event => setFirstName(event.target.value === undefined ? '' : event.target.value)}
    />
  );
  const LastNameField = (
    // @ts-ignore
    <StyledTextField
      value={lastName}
      placeholder='Last name'
      inputProps={{ type: 'text' }}
      onChange={event => setLastName(event.target.value === undefined ? '' : event.target.value)}
      onKeyPress={event => event.key === 'Enter' ? handleSubmit() : undefined}
    />
  );

  return (
    <ContentDiv>
      <Header>Subscribe</Header>
      <br/>
      <Body2>You'll receive an occasional email from me when I've published a blog post or have some
        announcement.</Body2>
      <br/>
      {EmailField}
      <br/>
      {FirstNameField}
      <br/>
      {LastNameField}
      <br/>
      <SubmitButton
        disabled={firstName === '' || emailAddress === ''}
        onClick={handleSubmit}>
        Submit
      </SubmitButton>
    </ContentDiv>
  );
};

const enhance = compose(
  withState<{}, string, 'emailAddress', 'setEmailAddress'>(
    'emailAddress',
    'setEmailAddress',
    '',
  ),
  withState<{}, string, 'firstName', 'setFirstName'>(
    'firstName',
    'setFirstName',
    '',
  ),
  withState<{}, string, 'lastName', 'setLastName'>(
    'lastName',
    'setLastName',
    '',
  ),
);

export default enhance(SubscribePanel);
