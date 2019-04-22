<template>
  <div class="container">
		<div class="row">
			<div class="col-12">
				<div class="message-control">
					<div class="filter">
						<p data-sorting-messages="unread"><span>22</span>Непрочитанные</p>
						<p class="active" data-sorting-messages="all">Все</p>
						<p data-sorting-messages="incoming">Входящие</p>
						<p data-sorting-messages="outgoing">Исходящие</p>
					</div>

					<div class="tools">
						<p data-type="archive" title="Архив"><i class="fas fa-archive"></i></p>
						<p data-type="delete" title="Удалить"><i class="fas fa-trash-alt"></i></p>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-12">
				<div class="list-messages">

					<div class="list-messages-date">
						<p>Сегодня</p>
					</div>
					
					<Message></Message>
					<MessageView></MessageView>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Message from '@/components/Message.vue'
import MessageView from '@/components/MessageView.vue'

export default {
  components: {
    Message, MessageView
  }
}
</script>
