import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { AuthService } from 'src/app/user/auth.service';
import { ISession } from '../shared/index'
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] | undefined
  @Input() filterBy!: string;
  @Input() sortBy!: string;
  @Input() eventId!: number;
  visibleSessions: ISession[] | undefined = [];

  constructor(public auth: AuthService, private voterService: VoterService){

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions?.sort (sortByNameAsc) :
                               this.visibleSessions?.sort (sortByVotesAsc);
    }
  }

  filterSessions(filter: string){
    if(filter === 'all'){
      this.visibleSessions = this.sessions?.slice(0);
    }
    else {
      this.visibleSessions = this.sessions?.filter(session => {
         return session.level.toLocaleLowerCase() === filter;   
      })
    }
  }

  toggleVote(session: ISession){
    if(this.voterService.userHasVoted(session, this.auth.currentUser.userName)){
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    }
    else{
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }

    //refresh the sort if sorted by votes
    if(this.sortBy === 'votes')
      this.visibleSessions.sort(sortByVotesAsc);

  }

  userHasVoted(session: ISession){
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name) return 1 
  else if(s1.name === s2.name) return 0
  else return -1 
}

function sortByVotesAsc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length
}

