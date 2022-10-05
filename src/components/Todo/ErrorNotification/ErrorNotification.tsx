/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';
import { Error } from '../../../types/Errors';

type Props = {
  error: Error | null,
  onErrorChange: (isError: Error | null) => void,

};

export const ErrorNotification: React.FC<Props>
= ({ error, onErrorChange }) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={cn(
        'notification is-danger is-light has-text-weight-normal',
        { hidden: !error },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => onErrorChange(null)}
      />
      {error}
    </div>
  );
};