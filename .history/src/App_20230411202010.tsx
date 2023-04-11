import React from 'react';
import { Text } from 'react-native';

export const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthProvider>
          <Route />
        </AuthProvider>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};

export default App;
