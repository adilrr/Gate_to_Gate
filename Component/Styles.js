import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems :'center',
        backgroundColor: '#f9fafd',
      },
      containerscrollview: {
        flex: 1,
        padding: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        color: '#333',
      },
      apptitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#333',
      },
      signInRegisterText: {
        fontSize: 16,
        fontWeight: 'normal',
        paddingTop :'7%',
        marginBottom: '7%',
        textAlign: 'center',
        color: '#333',
      },
      inputtitle: {
        fontSize: 16,
        paddingStart:'5%',
        paddingVertical:'3%',
        color: '#5E5E5B',
        textAlign: 'left', 
        fontWeight : 'bold'
      },
      inputfield: {
        width: '90%',
        height: 50,
        marginStart:'5%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
      },
      signInUpButton: {
        backgroundColor: '#6c63ff',
        paddingVertical: '4%',
        textAlign : 'center',
        borderRadius: 8,
      },
      signInUpText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal :'10%',
        marginVertical: 20,
      },
      line: {
        height: 3,
        flex: 1,
        backgroundColor: '#ccc',
      },
      orText: {
        marginHorizontal: 10,
        color: '#888',
        fontSize: 14,
      },
      registerButton: {
        borderWidth: 1,
        borderColor: '#6c63ff',
        paddingVertical: '5%',
        textAlign: 'center',
        borderRadius: 8,
      },
      registerText: {
        color: '#6c63ff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      radioGroup: {
        flexDirection: 'column',
        marginTop: 10,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingHorizontal:'5%'
      },
      radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      radioSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#000',
      },
      radioText: {
        fontSize: 16,
      },
      row: {
        flexDirection: 'row',
        padding : 10
      },
      button: {
        marginTop: 16,
        height : 60,
        textAlign:'center',
        borderRadius: 16,
        backgroundColor: "#6200ee",
      }, 
      profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: '#ccc',
      },

      userInfoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
      },
      name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
      },

      textprofile: {
        fontSize: 16,
        marginBottom: 5,
      },
      passcodeContainer: {
        width : '90%',
        padding: 20,
        marginStart : '5%',
        backgroundColor: '#FFFDD0',
        borderRadius : 25,
        marginBottom: 10,
        justifyContent :'center',
        alignItems:'center'
      },
      passcodeWarning: {
        fontSize: 14,
        textAlign : 'center',
        color: 'red',
        marginTop: 10,
      },
    card: {
        backgroundColor: '#FAF9F6',
        borderRadius: 10,
        width : '90%',
        marginStart : '5%',
        paddingBottom : 20,
        elevation: 3, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      menuItem: {
        flexDirection : 'row',
        paddingTop : 20,
        paddingStart:20,
        alignItems : 'center',
        paddingBottom :10,
        borderBottomWidth: 1,
          
      },
      menuItemText: {
        fontSize: 16,
        marginLeft: 10,
      },


 container: {
    marginBottom: 20,
  },
  inputtextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: 40, 
    textAlign: 'center', 
  },
  label: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },



  
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
    backgroundColor : '#f9fafd'
  },
  optionLabel: {
    color: '#333',
  },


  photo: {
    width: 60,
    height: 60,
    marginTop: 20,
    borderRadius : 40
  },


});