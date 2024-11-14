import Login from '../Login.vue';

export default {
  title: 'Login',
  component: Login,
};

const Template = (args: { [key: string]: any }) => ({
  components: { Login },
  setup() {
    return { args };
  },
  template: '<Login v-bind="args" />',
});

// Define the Default story
export const Default = Template.bind({});
Default.args = {};  
