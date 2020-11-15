import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostService } from 'src/app/services/post.service';
import { faEdit, faArrowAltCircleLeft, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-posts-detail',
    templateUrl: './posts-detail.component.html',
    styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {
    post: Post;
    isEditing: boolean;
    editIcon;
    backIcon;
    loadingIcon;

    constructor(
        private _router: Router,
        private _service: PostService,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.editIcon = faEdit;
        this.backIcon = faArrowAltCircleLeft;
        this.loadingIcon = faSpinner;
        this._route.paramMap.subscribe((params) => {
            if (!this.post) {
                this._service.getSingle(params.get('id')).subscribe((post) => {
                    this.post = this._service.fakePostData([post])[0];
                });
            }
            if (params.has('edit')) {
                this.isEditing = true;
            }
        });
    }

    back() {
        if (this.isEditing) {
            this._router.navigate(['/posts/', this.post.id]);
        } else {
            this._router.navigate(['/']);
        }
    }
    edit() {
        console.log('navigating to edit');
        this._router.navigate(['/posts/', this.post.id, 'edit']);
    }
}
