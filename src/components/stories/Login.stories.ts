import Login from '../Login.vue';

export default {
  title: 'Components/Login',
  component: Login,
};

const Template = (args: any) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" />',
});

export const Default = Template.bind({});
// Default.args = {user: {
//   uid: '12345',
//   email: 'user@example.com',
// },};
