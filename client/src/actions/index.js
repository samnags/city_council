export function selectMember(member) {        
    return {        
        type: 'MEMBER_SELECTED',
        payload: member,
        party: member.party        
    }
    
}