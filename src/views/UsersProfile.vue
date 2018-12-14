<template>
    <VcAFrame>
        <VcAColumn size="70%">
            <VcABox v-if="hasUser" :first="true" :title="getName()">
                <template slot="header">
                    <VcARole v-for="role in user.roles.map(role => role.role).filter((role) => role !== 'supporter')" :name="role" :key="role" />
                    <span v-if="!getProfile().confirmed" class="notConfirmed">{{ $t('profile.view.labels.notConfirmed') }}</span>
                </template>
                <div class="user">
                    <Avatar :user="user" type="profile" />
                    <div class="profile">
                        <ul class="crew">
                            <li>
                                <span class="vca-user-label">{{ $t('profile.view.labels.crew') }}:</span>
                                <span class="vca-user-value">{{ getProfile().supporter.crew.name }}</span>
                            </li>
                            <li>
                                <span class="vca-user-label">{{ $t('profile.view.labels.since') }}:</span>
                                <span class="vca-user-value">{{ getSince() }}</span>
                            </li>
                        </ul>
                        <ul class="contact">
                            <li>
                                <span class="vca-user-label">{{ $t('profile.view.labels.email') }}:</span>
                                <span class="vca-user-value">{{ getProfile().email }}</span>
                            </li>
                            <li>
                                <span class="vca-user-label">{{ $t('profile.view.labels.mobilePhone') }}:</span>
                                <span class="vca-user-value">{{ getProfile().supporter.mobilePhone }}</span>
                            </li>
                            <li>
                                <span class="vca-user-label">{{ $t('profile.view.labels.placeOfResidence') }}:</span>
                                <span class="vca-user-value">{{ getProfile().supporter.placeOfResidence }}</span>
                            </li>
                        </ul>

                        <ul class="demographics">
                            <li>
                                <span class="vca-user-label">{{ $t('profile.view.labels.age') }}:</span>
                                <span class="vca-user-value">{{ getAge() }}</span>
                            </li>
                            <li>
                                <span class="vca-user-label">{{ $t('profile.view.labels.gender') }}:</span>
                                <span class="vca-user-value">{{ $t('profile.view.value.gender.' + getProfile().supporter.sex) }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </VcABox>
            <VcABox v-else :first="true" :title="$t('profile.error.title')">
                {{ $t('profile.error.title') }}
            </VcABox>
        </VcAColumn>
    </VcAFrame>
</template>

<script>
    import axios from 'axios'
    import VcAFrame from '@/components/page/VcAFrame.vue';
    import VcAColumn from '@/components/page/VcAColumn.vue';
    import VcABox from '@/components/page/VcABox.vue';
    import { Avatar, VcARole } from 'vca-widget-user'

    export default {
        name: "UsersProfile",
        components: { VcAFrame, VcAColumn, VcABox, VcARole, Avatar },
        data() {
            return {
                uuid: this.$route.params.id,
                user: null
            }
        },
        computed: {
            hasUser() {
                return this.user !== null && (typeof this.user !== "undefined") && this.user.hasOwnProperty("id")
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                axios.get('/drops/webapp/user/' + this.uuid, {})
                    .then(response => {
                        if(response.status === 200) {
                            this.user = response.data.additional_information
                        }
                    })
                    .catch(error => {
                        this.$router.push({path: '/error/' + error.response.status})
                    })
            },
            getProfile() {
                var profile = this.user.profiles.find(p => p.primary)
                if(typeof profile === "undefined") {
                    profile = this.user.profiles[0]
                }
                return profile
            },
            getName() {
                return this.getProfile().supporter.fullName
            },
            getAge: function () {
                var birthday = new Date(this.getProfile().supporter.birthday)
                var ageDifMs = Date.now() - birthday.getTime()
                var ageDate = new Date(ageDifMs) // miliseconds from epoch
                return Math.abs(ageDate.getUTCFullYear() - 1970)
            },
            getSince: function () {
                var created = new Date(this.user.created)
                return created.getUTCFullYear()
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../assets/less/responsive.less';

    .user {
        display: flex;
        justify-content: flex-start;

        @media @phone-down {
            flex-direction: column;
        }
    }

    .notConfirmed {
        color: white;
        background-color: rgba(213, 0, 0, 1);
        padding: 0.3em;
        font-size: 0.9em;
        border-radius: 0.5em;
        margin: 0.2em;
    }

    .profile {
        margin-left: 2em;
        list-style: none;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;


        @media @phone-down {
            margin-left: 0;
        }

        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0;
            padding: 0;
            li {
                display: flex;
                flex-direction: column;
            }

            &.crew {
                align-items: flex-end;
            }

            &.contact {
                flex-direction: column;
            }

            &.demographics {
                justify-content: flex-end;
                li {
                    margin-left: 2em;
                    flex-direction: row;
                    align-items: baseline;

                    .vca-user-value {
                        margin-left: 0.3em;
                    }
                }
            }
        }
    }

    .vca-user-label {
        /*font-style: italic;*/
        font-weight: bold;
    }
    .vca-user-value {
        font-size: 1.4em;
    }

</style>