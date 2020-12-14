<template>
  <q-page q-pa-md>
<!-- List of Items -->
<q-list bordered class="q-ma-md" separator>

      <q-item
      v-for="bill in bills"
      :key="bill.id"
      @click="bill.paid = !bill.paid"
      :class="!bill.paid ? 'bg-grey-1' : 'bg-grey-4'"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="bill.paid" />
        </q-item-section>
        <q-item-section>
          <q-item-label
          :class="{ 'text-strikethrough' : bill.paid }">
          {{bill.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
          <q-icon
          name="event"
          size="15px"
          class="q-mr-sm"
          ></q-icon>
          <q-item-label caption>{{ bill.dueDate }}</q-item-label>
          </div>
          <div class="row">
          <small>
          <q-icon
          name="payment"
          size="15px"
          color="green"
          class="q-mr-sm" /> <b> ${{ bill.total}}</b></small>
          </div>
        </q-item-section>
      </q-item>

    </q-list>
<!-- End of List -->
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      bills: [
        {
          id: 1,
          name: 'May Invoice',
          paid: false,
          total: '249.95',
          dueDate: '2020/05/12',
        },
        {
          id: 2,
          name: 'June Invoice',
          paid: false,
          total: '249.95',
          dueDate: '2020/06/12',
        },
        {
          id: 3,
          name: 'July Invoice',
          paid: false,
          total: '249.95',
          dueDate: '2020/07/12',
        },
      ],
    };
  },
};
</script>

<style>

</style>
