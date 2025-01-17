/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/auth/login/": {
    /**
     * Check the credentials and return the REST Token
     * if the credentials are valid and authenticated.
     * Calls Django Auth login method to register User ID
     * in Django session framework
     *
     * Accept the following POST parameters: username, password
     * Return the REST Framework Token Object's key.
     */
    post: operations["auth_login_create"];
  };
  "/api/auth/logout/": {
    /**
     * Calls Django logout method and delete the Token object
     * assigned to the current User object.
     *
     * Accepts/Returns nothing.
     */
    post: operations["auth_logout_create"];
  };
  "/api/auth/password/change/": {
    /**
     * Calls Django Auth SetPasswordForm save method.
     *
     * Accepts the following POST parameters: new_password1, new_password2
     * Returns the success/fail message.
     */
    post: operations["auth_password_change_create"];
  };
  "/api/auth/password/reset/": {
    /**
     * Calls Django Auth PasswordResetForm save method.
     *
     * Accepts the following POST parameters: email
     * Returns the success/fail message.
     */
    post: operations["auth_password_reset_create"];
  };
  "/api/auth/password/reset/confirm/": {
    /**
     * Password reset e-mail link is confirmed, therefore
     * this resets the user's password.
     *
     * Accepts the following POST parameters: token, uid,
     *     new_password1, new_password2
     * Returns the success/fail message.
     */
    post: operations["auth_password_reset_confirm_create"];
  };
  "/api/auth/registration/": {
    post: operations["auth_registration_create"];
  };
  "/api/auth/registration/resend-email/": {
    post: operations["auth_registration_resend_email_create"];
  };
  "/api/auth/registration/verify-email/": {
    post: operations["auth_registration_verify_email_create"];
  };
  "/api/auth/token/refresh/": {
    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     */
    post: operations["auth_token_refresh_create"];
  };
  "/api/auth/token/verify/": {
    /**
     * Takes a token and indicates if it is valid.  This view provides no
     * information about a token's fitness for a particular use.
     */
    post: operations["auth_token_verify_create"];
  };
  "/api/checks": {
    get: operations["checks_list"];
  };
  "/api/checks/{id}": {
    get: operations["checks_retrieve"];
  };
  "/api/checks/{id}/items": {
    put: operations["checks_items_update"];
  };
  "/api/checks/{id}/name": {
    patch: operations["checks_name_partial_update"];
  };
  "/api/checks/{id}/users": {
    put: operations["checks_users_update"];
  };
  "/api/checks/sync": {
    post: operations["checks_sync_create"];
  };
  "/api/users/profile": {
    get: operations["users_profile_retrieve"];
    put: operations["users_profile_update"];
    delete: operations["users_profile_destroy"];
    patch: operations["users_profile_partial_update"];
  };
  "/api/users/profile/avatar": {
    put: operations["users_profile_avatar_update"];
    delete: operations["users_profile_avatar_destroy"];
  };
}

export interface components {
  schemas: {
    Check: {
      /** ID чека */
      id: number;
      items: components["schemas"]["CheckItem"][];
      users: components["schemas"]["User"][];
      /**
       * Дата создания
       * Format: date-time
       */
      createdAt: string;
      /**
       * Дата обновления
       * Format: date-time
       */
      updatedAt: string;
      /** Данные QR кода */
      qrData?: string | null;
      /** Наименование */
      name: string;
      /** Адрес */
      address?: string | null;
      /**
       * Дата покупки
       * Format: date-time
       */
      date: string;
      /** Сумма чека */
      totalSum: number;
      /**
       * ФН
       * @description Номер фискального накопителя
       */
      fn?: string | null;
      /**
       * ФПД
       * @description Фискальный признак документа
       */
      fp?: string | null;
      /**
       * ФД
       * @description Номер фискального документа
       */
      fd?: string | null;
      /** ИНН организации */
      orgInn: string;
      /** Название организации */
      orgName: string;
      /** Юр. адрес организации */
      orgAddress?: string | null;
      /** Кем создан */
      createdBy: number;
      /** Кем обновлён */
      updatedBy: number;
    };
    CheckItem: {
      /** ID товара */
      id: number;
      /**
       * Дата создания
       * Format: date-time
       */
      createdAt: string;
      /**
       * Дата обновления
       * Format: date-time
       */
      updatedAt: string;
      /** Наименование */
      name: string;
      /** Цена */
      price: number;
      /**
       * Количество
       * Format: decimal
       */
      quantity: string;
      /** Сумма */
      sum: number;
      /** Кем создан */
      createdBy: number;
      /** Кем обновлён */
      updatedBy: number;
      /** Чек */
      receipt: number;
      /** Пользователи */
      parts: number[];
    };
    CheckItemPartRequest: {
      user: string;
      /**
       * Количество
       * Format: decimal
       */
      part: string;
      /** Товар */
      item: number;
    };
    CheckNameUpdate: {
      /** Наименование */
      name: string;
    };
    CheckUsersUpdateRequest: {
      users: string[];
    };
    /** @description Serializer for JWT authentication. */
    JWT: {
      access_token: string;
      refresh_token: string;
      user: components["schemas"]["UserDetails"];
    };
    LoginRequest: {
      username?: string;
      /** Format: email */
      email?: string;
      password: string;
    };
    PaginatedCheckList: {
      /** @example 123 */
      count?: number;
      /**
       * Format: uri
       * @example http://api.example.org/accounts/?offset=400&limit=100
       */
      next?: string | null;
      /**
       * Format: uri
       * @example http://api.example.org/accounts/?offset=200&limit=100
       */
      previous?: string | null;
      results?: components["schemas"]["Check"][];
    };
    PasswordChangeRequest: {
      old_password: string;
      new_password1: string;
      new_password2: string;
    };
    /** @description Serializer for confirming a password reset attempt. */
    PasswordResetConfirmRequest: {
      new_password1: string;
      new_password2: string;
      uid: string;
      token: string;
    };
    /** @description Serializer for requesting a password reset e-mail. */
    PasswordResetRequest: {
      /** Format: email */
      email: string;
    };
    PatchedCheckNameUpdateRequest: {
      /** Наименование */
      name?: string;
    };
    PatchedProfileRequest: {
      /** Имя */
      firstName?: string;
      /** Фамилия */
      lastName?: string;
      /** Токен ЧекСкан */
      checkScanToken?: string | null;
    };
    Profile: {
      id: number;
      /**
       * Имя пользователя
       * @description Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.
       */
      username: string;
      /**
       * E-Mail
       * Format: email
       */
      email: string;
      /** Имя */
      firstName?: string;
      /** Фамилия */
      lastName?: string;
      /** Format: uri */
      avatarUrl: string;
      /** Токен ЧекСкан */
      checkScanToken?: string | null;
    };
    ProfileAvatar: {
      /**
       * Аватар
       * Format: uri
       */
      avatar?: string | null;
      avatarUrl: string;
    };
    ProfileAvatarRequest: {
      /**
       * Аватар
       * Format: binary
       */
      avatar?: string | null;
    };
    ProfileRequest: {
      /** Имя */
      firstName?: string;
      /** Фамилия */
      lastName?: string;
      /** Токен ЧекСкан */
      checkScanToken?: string | null;
    };
    RegisterRequest: {
      username: string;
      /** Format: email */
      email: string;
      password1: string;
      password2: string;
    };
    ResendEmailVerificationRequest: {
      /** Format: email */
      email: string;
    };
    RestAuthDetail: {
      detail: string;
    };
    TokenRefresh: {
      access: string;
    };
    TokenRefreshRequest: {
      refresh: string;
    };
    TokenVerifyRequest: {
      token: string;
    };
    User: {
      id: number;
      /**
       * Имя пользователя
       * @description Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.
       */
      username: string;
      /**
       * E-Mail
       * Format: email
       */
      email: string;
      /** Имя */
      firstName?: string;
      /** Фамилия */
      lastName?: string;
      /** Format: uri */
      avatarUrl: string;
    };
    /** @description User model w/o password */
    UserDetails: {
      /** ID */
      pk: number;
      /**
       * Имя пользователя
       * @description Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.
       */
      username: string;
      /**
       * E-Mail
       * Format: email
       */
      email: string;
      /** Имя */
      first_name?: string;
      /** Фамилия */
      last_name?: string;
    };
    VerifyEmailRequest: {
      key: string;
    };
  };
}

export interface operations {
  /**
   * Check the credentials and return the REST Token
   * if the credentials are valid and authenticated.
   * Calls Django Auth login method to register User ID
   * in Django session framework
   *
   * Accept the following POST parameters: username, password
   * Return the REST Framework Token Object's key.
   */
  auth_login_create: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["JWT"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["LoginRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["LoginRequest"];
        "application/json": components["schemas"]["LoginRequest"];
      };
    };
  };
  /**
   * Calls Django logout method and delete the Token object
   * assigned to the current User object.
   *
   * Accepts/Returns nothing.
   */
  auth_logout_create: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["RestAuthDetail"];
        };
      };
    };
  };
  /**
   * Calls Django Auth SetPasswordForm save method.
   *
   * Accepts the following POST parameters: new_password1, new_password2
   * Returns the success/fail message.
   */
  auth_password_change_create: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["RestAuthDetail"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["PasswordChangeRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["PasswordChangeRequest"];
        "application/json": components["schemas"]["PasswordChangeRequest"];
      };
    };
  };
  /**
   * Calls Django Auth PasswordResetForm save method.
   *
   * Accepts the following POST parameters: email
   * Returns the success/fail message.
   */
  auth_password_reset_create: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["RestAuthDetail"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["PasswordResetRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["PasswordResetRequest"];
        "application/json": components["schemas"]["PasswordResetRequest"];
      };
    };
  };
  /**
   * Password reset e-mail link is confirmed, therefore
   * this resets the user's password.
   *
   * Accepts the following POST parameters: token, uid,
   *     new_password1, new_password2
   * Returns the success/fail message.
   */
  auth_password_reset_confirm_create: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["RestAuthDetail"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["PasswordResetConfirmRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["PasswordResetConfirmRequest"];
        "application/json": components["schemas"]["PasswordResetConfirmRequest"];
      };
    };
  };
  auth_registration_create: {
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["JWT"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["RegisterRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["RegisterRequest"];
        "application/json": components["schemas"]["RegisterRequest"];
      };
    };
  };
  auth_registration_resend_email_create: {
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["RestAuthDetail"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["ResendEmailVerificationRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["ResendEmailVerificationRequest"];
        "application/json": components["schemas"]["ResendEmailVerificationRequest"];
      };
    };
  };
  auth_registration_verify_email_create: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["RestAuthDetail"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["VerifyEmailRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["VerifyEmailRequest"];
        "application/json": components["schemas"]["VerifyEmailRequest"];
      };
    };
  };
  /**
   * Takes a refresh type JSON web token and returns an access type JSON web
   * token if the refresh token is valid.
   */
  auth_token_refresh_create: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["TokenRefresh"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["TokenRefreshRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["TokenRefreshRequest"];
        "application/json": components["schemas"]["TokenRefreshRequest"];
      };
    };
  };
  /**
   * Takes a token and indicates if it is valid.  This view provides no
   * information about a token's fitness for a particular use.
   */
  auth_token_verify_create: {
    responses: {
      /** No response body */
      200: unknown;
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["TokenVerifyRequest"];
        "application/x-www-form-urlencoded": components["schemas"]["TokenVerifyRequest"];
        "application/json": components["schemas"]["TokenVerifyRequest"];
      };
    };
  };
  checks_list: {
    parameters: {
      query: {
        /** Number of results to return per page. */
        limit?: number;
        /** The initial index from which to return the results. */
        offset?: number;
        /** A search term. */
        search?: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PaginatedCheckList"];
        };
      };
    };
  };
  checks_retrieve: {
    parameters: {
      path: {
        /** A unique value identifying this Чек. */
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Check"];
        };
      };
    };
  };
  checks_items_update: {
    parameters: {
      path: {
        /** A unique value identifying this Чек. */
        id: number;
      };
    };
    responses: {
      /** No response body */
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CheckItemPartRequest"][];
      };
    };
  };
  checks_name_partial_update: {
    parameters: {
      path: {
        /** A unique value identifying this Чек. */
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CheckNameUpdate"];
        };
      };
    };
    requestBody: {
      content: {
        "application/x-www-form-urlencoded": components["schemas"]["PatchedCheckNameUpdateRequest"];
        "application/json": components["schemas"]["PatchedCheckNameUpdateRequest"];
        "multipart/form-data": components["schemas"]["PatchedCheckNameUpdateRequest"];
      };
    };
  };
  checks_users_update: {
    parameters: {
      path: {
        /** A unique value identifying this Чек. */
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Check"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CheckUsersUpdateRequest"];
      };
    };
  };
  checks_sync_create: {
    responses: {
      /** No response body */
      200: unknown;
    };
  };
  users_profile_retrieve: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Profile"];
        };
      };
    };
  };
  users_profile_update: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Profile"];
        };
      };
    };
    requestBody: {
      content: {
        "application/x-www-form-urlencoded": components["schemas"]["ProfileRequest"];
        "application/json": components["schemas"]["ProfileRequest"];
        "multipart/form-data": components["schemas"]["ProfileRequest"];
      };
    };
  };
  users_profile_destroy: {
    responses: {
      /** No response body */
      204: never;
    };
  };
  users_profile_partial_update: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["Profile"];
        };
      };
    };
    requestBody: {
      content: {
        "application/x-www-form-urlencoded": components["schemas"]["PatchedProfileRequest"];
        "application/json": components["schemas"]["PatchedProfileRequest"];
        "multipart/form-data": components["schemas"]["PatchedProfileRequest"];
      };
    };
  };
  users_profile_avatar_update: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ProfileAvatar"];
        };
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["ProfileAvatarRequest"];
      };
    };
  };
  users_profile_avatar_destroy: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ProfileAvatar"];
        };
      };
    };
  };
}

export interface external {}
