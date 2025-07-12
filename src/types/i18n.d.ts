import 'react-i18next';

declare module 'react-i18next' {
  interface Resources {
    welcome_page: {
      our_goal: {
        title: string;
        description: string;
      };
      about: {
        title: string;
        description: string;
      };
    };
  }
}
