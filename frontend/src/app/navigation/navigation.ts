import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [            
            {
                id       : 'todos',
                title    : 'Todos',
                translate: 'TODOS',
                type     : 'item',
                icon     : 'email',
                url      : '/todo',
                badge    : {
                    title    : 'Todos',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
        ]
    }
];
