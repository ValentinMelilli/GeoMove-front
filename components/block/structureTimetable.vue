<template>
    <section class="my-10 text-center">
        <h2 class="text-2xl font-bold mb-4">Horaires</h2>
        <table class="bg-white rounded-3xl m-auto shadow-xl">
            <thead>
                <tr>
                    <th class="p-4"></th>
                    <th class="p-4">Lundi</th>
                    <th class="p-4">Mardi</th>
                    <th class="p-4">Mercredi</th>
                    <th class="p-4">Jeudi</th>
                    <th class="p-4">Vendredi</th>
                    <th class="p-4">Samedi</th>
                    <th class="p-4">Dimanche</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="p-4 font-bold">Matin</td>
                    <td class="p-4">
                        De {{ timetable?.Lundi?.morning_start }}<br>
                        à {{ timetable?.Lundi?.morning_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Mardi?.morning_start }}<br>
                        à {{ timetable?.Mardi?.morning_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Mercredi?.morning_start }}<br>
                        à {{ timetable?.Mercredi?.morning_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Jeudi?.morning_start }}<br>
                        à {{ timetable?.Jeudi?.morning_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Vendredi?.morning_start }}<br>
                        à {{ timetable?.Vendredi?.morning_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Samedi?.morning_start }}<br>
                        à {{ timetable?.Samedi?.morning_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Dimanche?.morning_start }}<br>
                        à {{ timetable?.Dimanche?.morning_end }}
                    </td>
                </tr>
                <tr>
                    <td class="p-4 font-bold">Après-midi</td>
                    <td class="p-4">
                        De {{ timetable?.Lundi?.afternoon_start }}<br>
                        à {{ timetable?.Lundi?.afternoon_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Mardi?.afternoon_start }}<br>
                        à {{ timetable?.Mardi?.afternoon_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Mercredi?.afternoon_start }}<br>
                        à {{ timetable?.Mercredi?.afternoon_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Jeudi?.afternoon_start }}<br>
                        à {{ timetable?.Jeudi?.afternoon_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Vendredi?.afternoon_start }}<br>
                        à {{ timetable?.Vendredi?.afternoon_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Samedi?.afternoon_start }}<br>
                        à {{ timetable?.Samedi?.afternoon_end }}
                    </td>
                    <td class="p-4">
                        De {{ timetable?.Dimanche?.afternoon_start }}<br>
                        à {{ timetable?.Dimanche?.afternoon_end }}
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts" setup>
import { Timetable } from 'api_response';

const props = defineProps(["blockData"]);
const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const timetable = computed(() => {
    let timetable: any = {};

    props.blockData.timetable.forEach((time: Timetable) => {
        timetable[days[time.day]] = time;
    });

    return timetable;
});
</script>