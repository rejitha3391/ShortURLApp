import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputStyle: {
    fontSize: 12,
    height: 40,
    width: '75%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  buttonStyle: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginLeft: 5,
    paddingTop: 5,
  },
});
