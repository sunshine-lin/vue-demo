
const Index = resolve => require(['@/components/Index.vue'], resolve)
const DispatchingList = resolve => require(['@/components/service/DispatchingList.vue'], resolve)
const AdministrativeOffice = resolve => require(['@/components/administrativeOffice/AdministrativeOffice.vue'], resolve)

export default {
	Index,
 	DispatchingList,
 	AdministrativeOffice
}
