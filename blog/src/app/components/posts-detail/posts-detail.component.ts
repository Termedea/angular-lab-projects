import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
    selector: 'app-posts-detail',
    templateUrl: './posts-detail.component.html',
    styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {
    post;

    constructor(
        private _router: Router,
        private _service: PostService,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._route.paramMap.subscribe((params) => {
            if (params.has('id'))
                this._service.getSingle(params.get('id')).subscribe((post) => {
                    this.post = this._service.fakePostData([post])[0];
                    console.log(this.post);
                });
        });
    }
    back() {
        this._router.navigate(['/']);
    }
}
