const GENERIC_ERROR = 'GENERIC_ERROR';

export class BusinessError {
    errorCode: string;
    errorMessage: string;

    constructor(errorCode?: string, errorMessage?: string) {
            if(!errorCode) {
                errorCode = GENERIC_ERROR;
            }

            this.errorCode = errorCode;

            if(!errorMessage) {
                errorMessage = BusinessError.decodeError(errorCode);
            }

            this.errorMessage = errorMessage;
    }

    private static decodeError(errorCode: string) {
        switch(errorCode) {
            case 'INVALID_CREDENTIALS':
                return 'Usuario y/o contraseña incorrectos';
            case 'USER_ACCOUNT_EXISTS_WITH_THE_SAME_NAME':
                return 'El correo ya esta en uso';
            case 'PASSWORDS_DO_NOT_MATCH':
                return 'Las contraseñas no coinciden';
             case 'LOGIN_FACEBOOK_ERROR':
                return 'Error al iniciar sesión';
             case 'TIMEOUT':
                return 'Tiempo de espera agotado, intente nuevamente';
            case GENERIC_ERROR:
                return 'Ha ocurrido un error';
        }
    }
}
