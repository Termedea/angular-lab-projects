import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Post, PostService } from 'src/app/services/post.service';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { AppError } from 'src/app/common/errors/app-error';

@Component({
    selector: 'posts-edit',
    templateUrl: './posts-edit.component.html',
    styleUrls: ['./posts-edit.component.scss']
})
export class PostsEditComponent implements OnInit {
    @Input('post') post: Post;
    form: AbstractControl;
    errorIcon;
    constructor(private _service: PostService) {}
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
        this.errorIcon = faExclamationTriangle;
        this.form = new FormGroup({
            title: new FormControl(this.post.title, [Validators.required]),
            caption: new FormControl(this.post.caption),
            content: new FormControl(this.post.content, [Validators.required]),
            image: new FormControl(this.post.image)
        });
    }
    update() {
        let newData = {
            title: this.title,
            caption: this.caption.value,
            content: this.content.value,
            image: this.image.value,
            updatedAt: Date.now()
        };

        this._service.updatePost(this.post.id, newData).subscribe({
            next: null,
            error: (error) => {
                if (error instanceof AppError) this.form.setErrors(error.getValidationErrors());
            }
        });
    }
    debug(control: AbstractControl) {
        console.log(control);
    }
}
