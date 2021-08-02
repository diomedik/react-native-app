export interface ModalProps {
    title: string
    contentView?: () => React.ReactElement
    confirmButton?: () => React.ReactElement
    onClose: any
    visible: boolean
}