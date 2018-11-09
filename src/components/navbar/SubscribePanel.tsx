import { TextField } from '@material-ui/core';
import * as React from 'react';
import { SFC } from 'react';
import { compose, withState } from 'recompose';
import { Body2, Header3 } from '../../styling/Typography';
import { ContentDiv, ModalDiv, SubmitButton } from './SubscribePanel.style';

// TODO could turn this into a public mailchimp component
const postToMailchimp = (email: string, firstName: string) => {
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

  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'hidden');
  nameField.setAttribute('name', 'FNAME');
  nameField.setAttribute('value', firstName);
  form.appendChild(nameField);

  document.body.appendChild(form);
  form.submit();
};

interface IStateProps {
  emailAddress: string
  setEmailAddress: (s: string) => string
  firstName: string
  setFirstName: (s: string) => string
}

// TODO last name optional, actually submit

const SubscribePanel: SFC<IStateProps> = props => {
  const { emailAddress, setEmailAddress, firstName, setFirstName } = props;
  return (
    <ModalDiv>
      <ContentDiv>
        <Header3>Subscribe to my emails</Header3>
        <br/><br/>
        <Body2>You'll receive an occasional email from me when I've published a blog post or have some
          announcement.</Body2>
        <br/><br/>
        <TextField
          value={emailAddress}
          placeholder='Email address'
          inputProps={{type: 'email'}}
          onChange={event => setEmailAddress(event.target.value === undefined ? '' : event.target.value)}
        />
        <br/><br/>
        <TextField
          value={firstName}
          placeholder='First name'
          inputProps={{type: 'text'}}
          onChange={event => setFirstName(event.target.value === undefined ? '' : event.target.value)}
        />
        <br/><br/>
        <SubmitButton disabled={firstName !== '' && emailAddress !== ''}>Submit</SubmitButton>
      </ContentDiv>
    </ModalDiv>
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
);

export default enhance(SubscribePanel);
