import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/services/post.service';

@Component({
    selector: 'posts-edit',
    templateUrl: './posts-edit.component.html',
    styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit {
    @Input('post') post: Post;
    form: AbstractControl;
    constructor() {}
    get title() {
        return this.form.get('title');
    }
    get caption() {
        return this.form.get('caption');
    }
    get content() {
        return this.form.get('content');
    }
    get image() {
        return this.form.get('image');
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            title: new FormControl(this.post.title, [Validators.required]),
            caption: new FormControl(this.post.caption),
            content: new FormControl(this.post.content, [Validators.required]),
            image: new FormControl(this.post.image)
        });
    }
    update() {}
}
