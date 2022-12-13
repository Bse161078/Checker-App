import { applyDecorators, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, UploadedFile } from "@nestjs/common";

export function UploadedFileDecorator(fileType: string | RegExp, size: number = 10) {
    return UploadedFile(
        new ParseFilePipe({
            validators: [
                new MaxFileSizeValidator({ maxSize: size * 1024 * 1024 }),
                new FileTypeValidator({ fileType })
            ]
        })
    )
}