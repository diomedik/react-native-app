import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {ModalProps} from '../../types/modal';
import {styles} from './modal-styles';

export const ModalContainer = ({title, contentView, confirmButton, onClose, visible}: ModalProps) => {
    const [visibleModal, setVisibleModal] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal animationType="fade" transparent visible={visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.headerView}>
                            <View>
                                <Text style={styles.modalText}>{title}</Text>
                            </View>
                            <View>
                                <Pressable onPress={onClose} style={[styles.button, styles.buttonClose]}>
                                    <Text>X</Text>
                                </Pressable>
                            </View>
                        </View>

                        <View>{contentView && contentView()}</View>
                        <View>{confirmButton && confirmButton()}</View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
