import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    map: {
    flex: 1,
    },
    card: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    },
    image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    },
    title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
    },
    modalContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalBox: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    },
    modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    },
    closeButton: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    },
    label: {
    fontWeight: 'bold',
    marginTop: 10,
    },
    filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    },
    filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ddd',
    borderRadius: 8,
    },
    activeFilter: {
    backgroundColor: '#ffc',
    },
});

export default appStyles;
