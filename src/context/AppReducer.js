import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'durationType':
            switch(action.durationType) {
                case 'daily':
                    return {
                        durationType: 'daily'
                    }
                case 'weekly':
                    return {
                        durationType: 'weekly'
                    }
                case 'monthly':
                    return {
                        durationType: 'monthly'
                    }
                default:
                    return
            }
        default:
            return state;
    }
 }