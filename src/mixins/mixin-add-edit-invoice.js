export default {
  methods: {
    submitForm() {
      this.$refs.modalInvoiceName.$refs.name.validate();
      if (!this.$refs.modalInvoiceName.$refs.name.hasError) {
        this.submitInvoice();
      }
    },
  },
  components: {
    'modal-header': () => import('components/Invoices/Modals/Shared/ModalHeader.vue'),
    'modal-invoice-name': () => import('components/Invoices/Modals/Shared/ModalInvoiceName.vue'),
    'modal-due-date': () => import('components/Invoices/Modals/Shared/ModalDueDate.vue'),
    'modal-invoice-total': () => import('components/Invoices/Modals/Shared/ModalInvoiceTotal.vue'),
    'modal-save-button': () => import('components/Invoices/Modals/Shared/ModalButtons.vue'),
  },
};
