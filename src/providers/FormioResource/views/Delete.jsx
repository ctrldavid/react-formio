import React from 'react';
import ReduxView from 'redux-view';
import { FormioConfirm } from '../../../components';
import { SubmissionActions } from '../../Formio/actions';

export default function (resource) {
  return class extends ReduxView {
    container = ({ title, onYes, onNo }) => {
      return (
        <div className="form-delete">
          <FormioConfirm
            message={'Are you sure you wish to delete the ' + title + '?'}
            buttons={[
              {
                text: 'Yes',
                class: 'btn btn-danger',
                callback: onYes
              },
              {
                text: 'No',
                class: 'btn btn-default',
                callback: onNo
              }
            ]}
          />
        </div>
      );
    }

    mapStateToProps = ({ formio }) => {
      return {
        title: formio[resource.name].form.form.title
      };
    }

    mapDispatchToProps = (dispatch, { params }, router) => {
      return {
        onYes: () => {
          SubmissionActions.delete(resource.name, params[resource.name + 'Id'])
            .then(() => {
              router.transitionTo(resource.basePath());
            })
            .catch((error) => {

            })
        },
        onNo: () => {
          router.transitionTo(resource.basePath());
        }
      };
    }
  };
}
