import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FilterModal = ({ visible, onClose }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleStarPress = (rating) => {
    setSelectedRating(rating);
  };

  const handleCategoryPress = (category) => {
    setSelectedCategories(prevSelectedCategories =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter(item => item !== category)
        : [...prevSelectedCategories, category]
    );
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filter</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="close" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>General Category</Text>
            <View style={styles.categoryContainer}>
              {['Basic haircut', 'Coloring', 'Treatment', 'Massage', 'Kids haircut'].map(category => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryButton,
                    selectedCategories.includes(category) && styles.categoryButtonSelected
                  ]}
                  onPress={() => handleCategoryPress(category)}
                >
                  <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Rating Barber</Text>
            <View style={styles.ratingContainer}>
              {Array.from({ length: 5 }).map((_, index) => (
                <TouchableOpacity key={index} onPress={() => handleStarPress(index + 1)}>
                  <FontAwesome
                    name="star"
                    size={24}
                    color={index < selectedRating ? "#FFD700" : "#ddd"}
                  />
                </TouchableOpacity>
              ))}
              <Text style={styles.ratingText}>({selectedRating}.0)</Text>
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Price</Text>
            <View style={styles.priceContainer}>
              <TextInput style={styles.priceInput} placeholder="Min" keyboardType="numeric" defaultValue="30" />
              <Text style={styles.priceSeparator}>–</Text>
              <TextInput style={styles.priceInput} placeholder="Max" keyboardType="numeric" defaultValue="200" />
              <Text style={styles.priceUnit}>dh</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.applyButton} onPress={onClose}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  categoryButtonSelected: {
    borderColor: '#333',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 8,
    textAlign: 'center',
  },
  priceSeparator: {
    marginHorizontal: 8,
    fontSize: 16,
    color: '#333',
  },
  priceUnit: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterModal;
